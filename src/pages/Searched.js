import React , {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import styled from 'styled-components'

function Searched() {
  const params = useParams()
  const [searchedRecipes, setSearchedRecipes] = useState([])
  const getSearched = async (name) => {
		const check = localStorage.getItem('cuisine');
		if (check) {
			setSearchedRecipes(check);
		} else {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
			);
			const recipes = await data.json();
			setSearchedRecipes(recipes.results);
		}
	};

  useEffect(() => {
    getSearched(params.search)
    console.log(params)
  }, [params.search])
  


  return (
		<Grid>
			{searchedRecipes.map((item) => {
				return (
					<Card key={item.id}>
						<Link to={"/recipe/" + item.id}>
							<img src={item.image} alt={item.title} />
						</Link>
					</Card>
				);
			})}
		</Grid>
	);
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	grid-gap: 2rem;
`;
const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}

	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 4rem;
	}
`;

export default Searched