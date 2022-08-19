import Home from './pages/Home'
import Pages from './pages/Pages'
import Category from './components/Category'
import { Route, Routes, BrowserRouter , Link} from 'react-router-dom';
import Search from './components/Search'
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'


function App() {
  return (
		<div className="app">
			<BrowserRouter>
				<Nav>
					<Logo to={'/'}>
						<GiKnifeFork /> deliciousss
					</Logo>
				</Nav>
				<Search />
				<Category />
				<Pages />
			</BrowserRouter>
		</div>
	);
}

const Logo  = styled(Link)`
  text-decoration: none;
	font-weight: 1.5rem;
	font-weight: 400;
	font-family: 'Labster Two', cursive;
`

const Nav = styled.div`
  padding: 4rem 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	svg{
		font-size: 2rem;
	}
`

export default App;
