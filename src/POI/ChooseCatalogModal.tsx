import { Modal, Select } from 'native-base';
import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet } from 'react-native';
import { changeCatalog } from '../store/POIListReducer';
import { useDispatch } from 'react-redux';

export const ChoseCatalogModal = ({
    isModalOpen,
    setModalOpen
}: ChooseCatalogModalProps): JSX.Element => {
    const dispatch = useDispatch();

    const onCatalogChange = (value: string): void => {
        dispatch(changeCatalog(value));
        setModalOpen(false);
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            style={s.container}
        >
            <Modal.Content maxWidth={'400px'}>
                <Modal.Header>Choose catalog</Modal.Header>
                <Modal.CloseButton />
                <Modal.Body>
                    <Select
                        accessibilityLabel={'Chose catalog'}
                        minWidth={200}
                        onValueChange={onCatalogChange}
                        placeholder={'Select city'}
                    >
                        <Select.Item label={'Краснодар'} value={'Krasnodar'} />
                        <Select.Item label={'Москва'} value={'Moscow'} />
                        <Select.Item label={'Санкт-Петербург'} value={'SPB'} />
                    </Select>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
};

const s = StyleSheet.create({
    container: {}
});

type ChooseCatalogModalProps = {
    isModalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
};
