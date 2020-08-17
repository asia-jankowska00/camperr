import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";

import { getCategories } from "../actions/categoriesActions";
import { getCampgroundsByCat } from "../actions/campgroundActions";
import { redirect } from "../actions/routerActions";
import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import Headline from "./Headline";
import FlexWrapper from "../components/FlexWrapper";

const StyledCategories = styled.div(
  (props) => `
    min-width: 50%;
    display: flex;
    flex-wrap: ${props.nestedStyle ? "wrap" : "nowrap"};
    justify-content: ${props.justifyContent};
    align-items: ${props.alignItems};
    margin-bottom: ${props.theme.space[2]};
  `
);

const Categories = (props) => {
  const themeContext = useContext(ThemeContext);
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <FlexWrapper flexDirection="column" widthStyle="auto">
      <Headline
        tag="h3"
        styles={`text-align: left; margin-top: 0; width: 100%;`}
      >
        Categories
      </Headline>

      <StyledCategories>
        <FlexWrapper>
          {categories
            ? categories.map((category, index) => {
                return (
                  <Button
                    id={category._id}
                    key={index}
                    colorStyle={themeContext.color.dark}
                    backgroundColorStyle={themeContext.color.white}
                    sizeVertialStyle={themeContext.space[0.75]}
                    sizeHorizontalStyle={themeContext.space[2]}
                    onClick={() => {
                      dispatch(
                        redirect(`/campgrounds/category/${category._id}`)
                      );
                      dispatch(getCampgroundsByCat(category._id));
                    }}
                  >
                    {category.name}
                  </Button>
                );
              })
            : null}
        </FlexWrapper>
      </StyledCategories>
    </FlexWrapper>
  );
};

export default Categories;
