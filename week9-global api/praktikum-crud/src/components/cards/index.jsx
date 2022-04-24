import React, { useState } from 'react'
import {
    Avatar,
    Flex,
    Grid,
    GridItem,
    Heading,
    Wrap,
    WrapItem,
    IconButton,
    Divider,
    Text,
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'
import ModalFocus from '../modal-focus'

const Cards = ({
    onEdit,
    onDelete,
    name,
    nim,
    angkatan,
    status,
    idCard,
    address,
    phone
}) => {
    const [isOpenDetail, setIsOpenDetail] = useState(false)

    const onDetail = () => setIsOpenDetail(true)

    return (
        <>
            <Grid key={idCard} templateColumns='repeat(3, 1fr)' _hover={{ backgroundColor: '#F5DEF6', color: 'black' }} gap={6} mt='5'>
                <GridItem w='100%' p='4'>
                    <Flex alignItems='center'>
                        <div>
                            <Wrap mt='1' mr='2'>
                                <WrapItem>
                                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                </WrapItem>
                            </Wrap>
                        </div>
                        <div>
                            <Heading as='h6' size='xs'>
                                {name}
                            </Heading>
                            <Heading as='h6' mt='3' size='xs'>
                                {nim}
                            </Heading>
                        </div>
                    </Flex>
                </GridItem>
                <GridItem w='100%' h='10'>
                    <Flex justifyContent='space-between'>
                        <Divider color='blue' orientation='vertical' />
                        <GridItem w='100%' p='4'>
                            <Heading as='h6' size='xs'>
                                Angkatan {angkatan}
                            </Heading>
                            <Heading as='h6' mt='3' size='xs'>
                                Status {status}
                            </Heading>
                        </GridItem>
                    </Flex>
                </GridItem>
                <GridItem w='100%' p='4'>
                    <Flex gap={2} justifyContent='right'>
                        <IconButton
                            colorScheme='blue'
                            aria-label='detail'
                            icon={<ViewIcon />}
                            onClick={onDetail}
                        />
                        <IconButton
                            colorScheme='blue'
                            aria-label='edit'
                            icon={<EditIcon />}
                            onClick={onEdit}
                        />
                        <IconButton
                            colorScheme='blue'
                            aria-label='delete'
                            icon={<DeleteIcon />}
                            onClick={onDelete}
                        />
                    </Flex>
                </GridItem>
            </Grid>
            <ModalFocus
                title='Lihat Data'
                isOpen={isOpenDetail}
                onClose={() => setIsOpenDetail(prev => !prev)}
            >
                <div>
                    <Text fontSize='md'>Nama: {name}</Text>
                    <div style={{ height: 15 }} />
                    <Text fontSize='md'>Nim: {nim}</Text>
                    <div style={{ height: 15 }} />
                    <Text fontSize='md'>Alamat: {address}</Text>
                    <div style={{ height: 15 }} />
                    <Text fontSize='md'>Nomor HP: {phone}</Text>
                    <div style={{ height: 15 }} />
                    <Text fontSize='md'>Angkatan: {angkatan}</Text>
                    <div style={{ height: 15 }} />
                    <Text fontSize='md'>Status Mahasiswa: {status}</Text>
                    <div style={{ height: 15 }} />
                </div>
            </ModalFocus>
        </>
    )
}

export default Cards