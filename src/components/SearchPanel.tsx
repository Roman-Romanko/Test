import React from 'react';
import { SearchContainer, SearchInput } from '../assets/styles/Search-style';

export const SearchPanel = () => {
    return (
        <SearchContainer>
            <SearchInput placeholder="Search" />
            <button>Search</button>
        </SearchContainer>
    );
};