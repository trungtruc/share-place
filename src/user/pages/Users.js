import React from 'react';
import UserList from '../components/UserList/UserList';


const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Thiện',
      image: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/116433344_614623286106060_7675621231755787326_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=CUfAOLoKJjIAX8HVJF4&_nc_ht=scontent.fsgn2-6.fna&oh=869cd33c802c8cd9d51d80c13f2022d4&oe=5F699CA9',
      places: 5
    },
    {
      id: 'u2',
      name: 'Nhỏ',
      image: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-1/107434727_1861472460662248_1957875717928810951_o.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_ohc=4zWBgyz-nyYAX_6V0Tc&_nc_ht=scontent.fsgn5-6.fna&oh=3019682a8ca0eb998582c8326721be92&oe=5F5D14ED',
      places: 3
    },
    {
      id: 'u3',
      name: 'Tú',
      image: 'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-1/65557785_2383663798577393_3472052683072864256_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=q3a3uwOy7KMAX_fYue2&_nc_ht=scontent.fsgn5-4.fna&oh=c59bceae1985cccbfcd2e79f3a7159e7&oe=5F5EB940',
      places: 1
    },
    {
      id: 'u4',
      name: 'Chiến',
      image: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/109539834_1612088268945722_2927682706728582755_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=mMEdWr-s0HcAX8axNwp&_nc_ht=scontent.fsgn2-1.fna&oh=55ce39673c9be2a1cd864ebcefb1371b&oe=5F667699',
      places: 2
    },
    {
      id: 'u5',
      name: 'Xíu',
      image: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/103533540_1768667533275142_6782227207508310795_n.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=ahUzbbTHk3QAX8X5ah_&_nc_ht=scontent.fsgn2-1.fna&oh=5a98551f751896915a11e124e28a9b68&oe=5F67CF8A',
      places: 3
    },
    {
      id: 'u6',
      name: 'Tùng',
      image: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/82357977_1539085009596259_7474638598633947136_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=DZ_8IGlXoEEAX-iV2Vg&_nc_ht=scontent.fsgn2-5.fna&oh=76ed807aa3d280e29c148e1c38b6a4f0&oe=5F676C47',
      places: 1
    }
  ];
  return (
    <UserList items={USERS} />
  )
}

export default Users;