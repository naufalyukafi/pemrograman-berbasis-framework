import { ChakraProvider, Flex, Input } from '@chakra-ui/react'
import { Button, Select } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import Layouts from './components/layouts'
import Fonts from './components/fonts'
import './App.css';
import Cards from './components/cards'
import ModalFocus from './components/modal-focus'
import { useEffect, useState } from 'react'
import API from './services'

function App() {
  const [data, setData] = useState([])
  const [isOpenNewData, setIsOpenNewData] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [name, setName] = useState('')
  const [nim, setNim] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [angkatan, setAngkatan] = useState('')
  const [status, setStatus] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    API.getMahasiswa()
    .then(data => {
      setData(data)
    }).catch(err => {
      console.error(err)
    })
  }

  const onDelete = (id) => {
    API.deleteMahasiswa(id)
    .then(() => {
      alert('berhasil hapus data')
      getData()
    })
  }

  const onEdit = () => {
    const newData = {
      id: id,
      NIM: nim,
      nama: name,
      alamat: address,
      hp: phone,
      angkatan: angkatan,
      status: status
    }
    API.updateMahasiswa(newData, id)
    .then(() => {
      alert('berhasil Edit data')
      getData()
      setIsOpenEdit(false)
      setName('')
      setAddress('')
      setNim('')
      setPhone('')
      setAngkatan('')
      setStatus('')
    }).catch(err => {
      console.error(err)
    })
  }

  const handleEdit = (data) => {
    setIsOpenEdit(true)
    setId(data.id)
    setName(data.nama)
    setAddress(data.alamat)
    setNim(data.NIM)
    setPhone(data.hp)
    setAngkatan(data.angkatan)
    setStatus(data.status)
  }
  console.log(angkatan)

  const onNewData = () => {
    const timeStamp = new Date().getTime()
    const newData = {
      id: timeStamp,
      NIM: nim,
      nama: name,
      alamat: address,
      hp: phone,
      angkatan: angkatan,
      status: status
    }
    API.postMahasiswa(newData)
    .then(() => {
      getData()
      setIsOpenNewData(false)
      setName('')
      setAddress('')
      setNim('')
      setPhone('')
      setAngkatan('')
      setStatus('')
    })
    .catch(err => console.error(err))
  }

  const handleNameChange = (event) => setName(event.target.value)
  const handleNimChange = (event) => setNim(event.target.value)
  const handleAddressChange = (event) => setAddress(event.target.value)
  const handlePhoneChange = (event) => setPhone(event.target.value)
  const selectedAngkatan = (event) => setAngkatan(event.target.value);
  const selectedStatus = (event) => setStatus(event.target.value)

  const listAngkatan = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
  const listStatus = ['aktif', 'cuti', 'lulus']

  return (
    <ChakraProvider>
      <Fonts />
      <Layouts>
        <div className='mt-16'>
          <Flex justifyContent="space-between" alignItems="center" flexWrap='wrap' >
            <Button rightIcon={<AddIcon />} bg='purple' color='white' onClick={() => setIsOpenNewData(true)}>Tambah Kontak</Button>
            <Select bg='purple' color='white' width='400px'>
              <option value='option1' style={{backgroundColor: '#2D3748'}} defaultChecked>Angkatan</option>
              {
                listAngkatan.map((item, index) => (
                  <option key={index} value={item} style={{backgroundColor: '#2D3748'}}>{item}</option>
                ))
              }
            </Select>
            <Select bg='purple' color='white' width='400px'>
              <option value='option1' style={{backgroundColor: '#2D3748'}} defaultChecked>Status Mahasiswa</option>
              {
              listStatus.map((item, index) => (
                <option style={{backgroundColor: '#2D3748'}} key={index} value={item}>{item}</option>
              ))
            }
            </Select>
          </Flex>
         {
           data && data.map((item, index) => (
              <Cards
                key={index}
                idCard={item.id}
                name={item.nama}
                address={item.alamat}
                phone={item.hp}
                nim={item.NIM}
                angkatan={item.angkatan}
                status={item.status}
                onDelete={() => onDelete(item.id)}
                onEdit={() => handleEdit(item)}
              />
           ))
         }
        </div>
        <ModalFocus 
          title='Tambah Data'
          isOpen={isOpenNewData}
          onClose={() => setIsOpenNewData(prev => !prev)}
          onSave={onNewData}
        >
         <Input value={name} onChange={handleNameChange} name='name' type='text' variant='filled' placeholder='Nama Mahasiswa' />
         <div style={{height: 15}} />
         <Input value={nim} onChange={handleNimChange} name='nim' type='number' variant='filled' placeholder='Nim Mahasiswa' />
         <div style={{height: 15}} />
         <Input value={address} onChange={handleAddressChange} name='address' type='text' variant='filled' placeholder='Alamat Mahasiswa' />
         <div style={{height: 15}} />
         <Input value={phone} onChange={handlePhoneChange} name='phone' type='tel' variant='filled' placeholder='Nomor HP' />
         <div style={{height: 15}} />
         <Flex>
          <Select value={angkatan} onChange={(e) => selectedAngkatan(e)} variant='filled' placeholder='Angkatan'  width='200px'>
              {
                listAngkatan.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))
              }
          </Select>
          <div style={{width: 15}} />
          <Select value={status} onChange={(e) => selectedStatus(e)} variant='filled' placeholder='Status Mahasiswa'  width='200px'>
            {
              listStatus.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }  
          </Select>
        </Flex>
        </ModalFocus>

        <ModalFocus 
          title='Edit Data'
          isOpen={isOpenEdit}
          onClose={() => setIsOpenEdit(prev => !prev)}
          onSave={onEdit}
        >
         <Input value={name} onChange={handleNameChange} name='name' type='text' variant='filled' placeholder='Nama Mahasiswa' />
         <div style={{height: 15}} />
         <Input value={nim} onChange={handleNimChange} name='nim' type='number' variant='filled' placeholder='Nim Mahasiswa' />
         <div style={{height: 15}} />
         <Input value={address} onChange={handleAddressChange} name='address' type='text' variant='filled' placeholder='Alamat Mahasiswa' />
         <div style={{height: 15}} />
         <Input value={phone} onChange={handlePhoneChange} name='phone' type='tel' variant='filled' placeholder='Nomor HP' />
         <div style={{height: 15}} />
         <Flex>
          <Select value={angkatan} onChange={(e) => selectedAngkatan(e)} variant='filled' placeholder='Angkatan'  width='200px'>
              {
                listAngkatan.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))
              }
          </Select>
          <div style={{width: 15}} />
          <Select value={status} onChange={(e) => selectedStatus(e)} variant='filled' placeholder='Status Mahasiswa'  width='200px'>
            {
              listStatus.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }  
          </Select>
        </Flex>
        </ModalFocus>
       
      </Layouts>
    </ChakraProvider>
  );
}

export default App;
