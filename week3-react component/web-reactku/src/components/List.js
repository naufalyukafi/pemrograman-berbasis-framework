import React, { Component } from 'react';
import Image from './Image';
class List extends Component {
    render() {
        return (
        <div>
            <ol>
                <li>
                    Satu
                    <Image linkGambar='https://media-cdn.tripadvisor.com/media/photo-s/15/03/79/e3/otto-s-anatolian-food.jpg' />
                </li>
                <li>
                    Dua
                    <Image linkGambar='https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/menu_padang_hero.original.jpegquality-90.jpg' />
                </li>
                <li>
                    Tiga
                    <Image linkGambar='https://asset-a.grid.id/crop/0x0:0x0/780x800/photo/bobofoto/original/7670_sate-ayam.jpg' />
                </li>
                <li>
                    Empat
                    <Image linkGambar='https://img-global.cpcdn.com/recipes/8f29780d9311e2b0/1200x630cq70/photo.jpg' />
                </li>
            </ol>
        </div>
        );
        }
    }

export default List;