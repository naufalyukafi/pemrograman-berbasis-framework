import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'

const ModalFocus = ({ isOpen, onClose, onSave, title, children }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{children}</ModalBody>
                {
                    onSave && (
                        <ModalFooter>
                            <Button colorScheme='purple' mr={3} onClick={onSave}>
                                Simpan
                            </Button>
                            <Button colorScheme='purple' onClick={onClose}>
                                Batal
                            </Button>
                        </ModalFooter>
                    )
                }
            </ModalContent>
        </Modal>
    )
}

export default ModalFocus