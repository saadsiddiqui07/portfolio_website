import styled from "styled-components";

export const Container = styled.div`
	padding: 1rem;
	padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
   	grid-template-columns: repeat(5, 1fr);
   	grid-template-rows: repeat(2, 60px);
  	grid-column-gap: 0.5rem;
  	grid-row-gap: 0.5rem;
	}
`;

export const LinkTag = styled.a`
	display: flex;
	align-items: center;
	color: white;
  cursor: pointer;
`;

export const Title = styled.span`
  margin-left: 15px;
  font-size: 2rem;
  font-weight: 800;
`;

export const Div1 = styled.div`
	display: flex;
	flex-direction: column;
  
  @media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1 / 1 / 2 / 3;
	}
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
    align-items: center;
    width: 100%;
  }
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;


export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  margin-left: 20px;
  border-radius: 50px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;    
  }
`

