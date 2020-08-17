import React, { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

import { getCategories } from "../actions/categoriesActions";
import { redirect } from "../actions/routerActions";
import { getCampgroundsByCat } from "../actions/campgroundActions";
import { useDispatch, useSelector } from "react-redux";

import Headline from "../components/Headline";
import Thumbnail from "../components/Thumbnail";
import Container from "../components/Container";
import Paragraph from "../components/Paragraph";

const SectionCategories = (props) => {
  const themeContext = useContext(ThemeContext);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      heightStyle="100vh"
    >
      <Headline tag="h3" styles={`color: ${themeContext.color.dark};`}>
        The perfect place to find a new trip
      </Headline>
      <Paragraph>
        Share your favorite camping spots with other camping enthusiasts, write
        reviews and find new places to go to. Try it our for yourself!
      </Paragraph>
      <Container
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
      >
        {categories
          ? categories.map((category) => {
              return (
                <Thumbnail
                  image={category.image}
                  title={category.name}
                  linkText="Browse"
                  buttonOnClick={() => {
                    dispatch(redirect(`/campgrounds/category/${category._id}`));
                    dispatch(getCampgroundsByCat(category._id));
                  }}
                />
              );
            })
          : null}
      </Container>
    </Container>
  );
};

export default SectionCategories;
