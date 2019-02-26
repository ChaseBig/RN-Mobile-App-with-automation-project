import React from 'react';
import renderer from 'react-test-renderer';
import { mount, wrapper } from 'enzyme';
import App from '../../App';
import { FlooringType } from '../../Condition/FlooringType';
import { SavedPhotosLauncher } from '../../Components/SavedPhotosLauncher';
import { CameraLauncher } from '../../Components/CameraLauncher';
import { CommentsLauncher } from '../../Components/CommentsLauncher';
import { FloorLevel } from '../../Components/FloorLevel';
import { CeilingType } from '../../Components/CeilingType';
import { RoomLayout } from '../../Components/RoomLayout';
import "babel-polyfill";
import fetch from 'isomorphic-fetch'

describe('KnockKitchenDetail view suite', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should render Kitchen view correctly', () => {
        const tree = renderer.create(
            <App />
        ).toJSON()

        expect( tree ).toMatchSnapshot();
    });

// Room Layout header
    it('should show the Room Layout header text', () => {
        // Info text visible
        const wrapper = mount(<RoomLayout />);

        expect(wrapper.find({testID:'roomLayoutText'}).text()).toBe('Room Layout');
    });

    it('should show info text for what to do in Room Layout container', () => {
        // Info text visible
        const wrapper = mount(<RoomLayout />);

        expect(wrapper.find({testID:'infoText'}).text()).toBe('Take photos from opposite corners of the room');
    });

// Saved Photos and Camera Launcher Icon Buttons
    it('tapping saved photos button should launch saved photos workflow',async () => {
        // Select the saved photos button
        const launchSavedPhotosViewer = jest.fn();
        const wrapper = mount(<SavedPhotosLauncher />);
        wrapper.setProps({ photoNumber: 2})
        wrapper.find({testID: '{photoNumber}_of_photos'}).simulate('press');
        expect(launchSavedPhotosViewer).toHaveBeenCalledTimes(1);
    });

    it('should launch the camera when any camera icon is selected', () => {
        // Finds, selects, and launches native camera
        const launchNativeCamera = jest.fn();
        const wrapper = mount(<CameraLauncher />);
        wrapper.find({testID: 'cameraIconLauncherBtn'}).simulate('press');
        expect(launchNativeCamera).toHaveBeenCalled();
    });

// Add Comments and Comment Modal Launcher Icon Buttons
    it('should launch the comment modal when any comment icon is selected', () => {
        // Find and select a comment icon button
        const launchCommentModal = jest.fn();
        const wrapper = mount(<CommentsLauncher />);
        wrapper.find({testID: 'commentsIconButton'}).simulate('press');
        expect(launchCommentModal).toHaveBeenCalled();
    });

    it('should launch the comment modal when add comments button is pressed', () => {
        // Find and press the add comments button
        const launchAddCommentModal = jest.fn();
        const wrapper = mount(<AddCommentsLauncher />);
        wrapper.find({testID: 'addCommentsRoomLayoutButton'}).simulate('press');
        expect(launchAddCommentModal).toHaveBeenCalled();
    });

// Floor Level Section 
    it('should allow user to select a floor level', () => {
        // selects the floor level
        const selectFloorLevel = jest.fn();
        const wrapper = mount(<FloorLevel onPress={selectFloorLevel} />);
        wrapper.find({testID: 'floorLevelLower'}).simulate('press')
        expect(floorLevel).toHaveBeenCalledWith('Lower')
    });

    it('should show changed state of the floor level', () => {
        // checks that the floor level state has changed
        const wrapper = mount(<App />);
        const text = wrapper.find({testID: 'floorLevelLower'}).text();
        expect(text).toBeFalsy();
        expect(wrapper.state('floorLevel')).toBe(null);

        wrapper.find({testID: 'floorLevelLower'}).simulate('press');
        expect(wrapper.find({testID:'floorLevelLower'}).text()).toBe('Lower');
        expect(wrapper.state('floorLevel')).toBe('Lower');
    });

// Walls / Paint Header Text
    it('should show the walls and paint header text', () => {
        // Info text visible
        const wrapper = mount(<App />);

        expect(wrapper.find({testID:'wallsPaintHeaderText'}).text()).toBe('Walls / Paint');
    });

// Ceiling Section
    it('should show the ceiling header text', () => {
        // Info text visible
        const wrapper = mount(<App />);

        expect(wrapper.find({testID:'ceilingHeaderText'}).text()).toBe('Ceiling');
    });

    it('should allow user to select a type of ceiling', () => {
        // selects the type of ceiling
        const selectCeilingType = jest.fn();
        const wrapper = mount(<CeilingType onPress={selectCeilingType} />);
        wrapper.find({testID: 'ceilingTypeSpackled'}).simulate('press')
        expect(selectCeilingType).toHaveBeenCalledWith('Spackled')
    });

    it('should show changed state of the selected ceiling type', () => {
        // checks the ceiling type state change
        const wrapper = mount(<App />);
        const text = wrapper.find({testID: 'ceilingTypeSpackled'}).text();
        expect(text).toBeFalsy();
        expect(wrapper.state('ceilingType')).toBe(null);

        wrapper.find({testID: 'ceilingTypeSpackled'}).simulate('press');
        expect(wrapper.find({testID:'ceilingTypeSpackled'}).text()).toBe('Spackled');
        expect(wrapper.state('ceilingType')).toBe('Spackled');
    });

    it('should show changed state of the selected condition', () => {
        // checks the condition state change
        const wrapper = mount(<App />);
        const text = wrapper.find({testID: 'roomItemCondition'}).text();
        expect(text).toBeFalsy();
        expect(wrapper.state('roomItemCondition')).toBe(null);

        wrapper.find({testID: 'conditionGood'}).simulate('press');
        expect(wrapper.find({testID:'conditionGood'}).text()).toBe('Good');
        expect(wrapper.state('roomItemCondition')).toBe('Good');
    });

// Flooring Type Section
    it('should show the Flooring header text', () => {
        // Info text visible
        const wrapper = mount(<App />);

        expect(wrapper.find({testID:'flooringHeaderText'}).text()).toBe('Flooring');
    });

    it('should allow user to select a type of flooring', () => {
        // selects the type of flooring
        const selectFloorType = jest.fn();
        const wrapper = mount(<FlooringType onPress={selectFloorType} />);
        wrapper.find({testID: 'flooringTypeTile'}).simulate('press')
        expect(selectFloorType).toHaveBeenCalledWith('Tile')
    });

    it('should show changed state of the selected flooring type', () => {
        // checks the flooring type state change
        const wrapper = mount(<App />);
        const text = wrapper.find({testID: 'flooringTypeTile'}).text();
        expect(text).toBeFalsy();
        expect(wrapper.state('tile')).toBe(null);

        wrapper.find({testID: 'flooringTypeTile'}).simulate('press');
        expect(wrapper.find({testID:'selectedFlooringType'}).text()).toBe('Tile');
        expect(wrapper.state('flooringType')).toBe('Tile');
    });
});