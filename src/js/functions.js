// Best Sellers Books
import {viewport} from "./variables.js";

export const bookCount = () => {
  if(viewport < 768){
    return 1;
  }else
  if(viewport >= 768 && viewport < 1440 ){
    return 3;
  }else
  if(viewport > 1440){
    return 5;
  }
}