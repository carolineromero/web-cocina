import axios from "axios";
const baseURL = "http://localhost:3000/categoriesRecipe";

export const recipesServices = {
  getAllRecipes() {
    const recipes = axios.get(baseURL).then((res) => res.data);
    return recipes;
  },

  getRecipesById(id) {
    const recipes = axios.get(baseURL +"/id/" + id).then((res) => res.data);
    return recipes;
  }

};

