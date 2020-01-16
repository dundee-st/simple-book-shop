import React from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';
import { setSearchQuery } from '../actions/filter';

const Filter = ({ setFilter, filteredBy, searchQuery, setSearchQuery }) => {

    // const { setFilter, filteredBy } = props;  //тоже что в аргументах

    let handleItemClick = (e, { name }) => {
        setFilter(name);
    }

    return (
        <div>
            <Menu pointing>
                <Menu.Item
                    name='all'
                    active={filteredBy === 'all'}
                    onClick={handleItemClick}>
                    Все
                </Menu.Item>
                <Menu.Item
                    name='popular'
                    active={filteredBy === 'popular'}
                    onClick={handleItemClick}>
                    Популярные
                </Menu.Item>
                <Menu.Item
                    name='price_high'
                    active={filteredBy === 'price_high'}
                    onClick={handleItemClick}>
                    Цена (дорогие)
                </Menu.Item>
                <Menu.Item
                    name='price_low'
                    active={filteredBy === 'price_low'}
                    onClick={handleItemClick}>
                    Цена (дешевые)
                </Menu.Item>
                <Menu.Item
                    name='author'
                    active={filteredBy === 'author'}
                    onClick={handleItemClick}>
                    Автор
                </Menu.Item>
                <Menu.Item>
                    <Input icon='search' onChange={e => setSearchQuery(e.target.value)} value={searchQuery} placeholder='Search...' />
                </Menu.Item>
            </Menu>
        </div>
    )
};

export default Filter;