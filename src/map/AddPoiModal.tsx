import React, { Dispatch, SetStateAction } from 'react';
import { Modal } from 'native-base';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addPOI } from '../store/POIListReducer';
import { Location } from '../types';

export const AddPoiModal = ({
    isModalOpen,
    toggleModal,
    location,
    setTempMarker
}: AddPoiModalProps): JSX.Element => {
    return (
        <Modal isOpen={isModalOpen} onClose={toggleModal} style={styles.modal}>
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Body>
                    <AddPOIForm
                        location={location}
                        setTempMarker={setTempMarker}
                        toggleModal={toggleModal}
                    />
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
};

const AddPOIForm = ({
    location,
    setTempMarker,
    toggleModal
}: Partial<AddPoiModalProps>) => {
    const dispatch = useDispatch();

    const onSubmit = ({ name = '', imageURL = '', description = '' }) => {
        dispatch(addPOI({ name, imageURL, description, location }));
        setTempMarker(null);
        toggleModal();
    };

    return (
        <Formik
            initialValues={{ name: '', imageURL: '', description: '' }}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Text>Name of POI</Text>
                    <TextInput
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
                    <Text>Image URL</Text>
                    <TextInput
                        onChangeText={handleChange('imageURL')}
                        onBlur={handleBlur('imageURL')}
                        value={values.imageURL}
                    />
                    <Text>Description</Text>
                    <TextInput
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.description}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        margin: 10
    }
});

type AddPoiModalProps = {
    isModalOpen: boolean;
    location: Location | null;
    toggleModal: () => void;
    setTempMarker: Dispatch<SetStateAction<Location | null>>;
};
