import styled from 'styled-components';

export const SidebarContainer = styled.div`
position: fixed;
right: 0;
top: 4rem;
bottom: 6rem;
min-height: auto;
min-width: 30px;
display: flex;
justify-content: center;
align-items: center;
`

export const SidebarItemList = styled.ul`
display: grid;
grid-template-rows: auto auto;
grid-template-columns: auto;
justify-items: center;
`

export const SidebarItem = styled.li`
list-style: none;
padding: 5px;


`

export const SidebarLink = styled.a`
color: #fff;
cursor: pointer;
text-decoration: none;
img{
    filter: invert(1);
`