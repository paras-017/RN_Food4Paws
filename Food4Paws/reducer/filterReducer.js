const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
          let priceArr = action.payload.map((curElem) => curElem.dealPrice);
          let maxPrice = Math.max(...priceArr);
         
          return{
              ...state,
              //We are using the copy of filter_products,all_products
              filter_products:[...action.payload],
              all_products:[...action.payload],
              filters: { ...state.filters, maxPrice, price: maxPrice },
          }

      case "SORTING_PRODUCTS":
          let newSortData;
          const { filter_products, sorting_value } = state;
          let tempSortProduct = [...filter_products];
          const sortingProducts = (a, b) => {
          if (sorting_value === "bestSelling") {
              return b.stars-a.stars;
              }
      
          if (sorting_value === "AtoZ") {
          return a.name.localeCompare(b.name)
          }
  
          if (sorting_value === "ZtoA") {
          return b.name.localeCompare(a.name)
          }
  
          if (sorting_value === "lowestPrice") {
          return a.dealPrice-b.dealPrice
          }
          if (sorting_value === "highestPrice") {
          return b.dealPrice-a.dealPrice
          }
          }
          newSortData = tempSortProduct.sort(sortingProducts);
          return{
              ...state,
              filter_products:newSortData,
          }
     
      case "FILTER_PRODUCTS":
          let {all_products} = state
          let tempFilterProducts = [...all_products]
          const {text, price } = state.filters;
          if(text){
              tempFilterProducts = tempFilterProducts.filter((curElem)=>{
                return curElem.name.toLowerCase().includes(text)
              })
          }
      
          if (price === 0) {
            tempFilterProducts = tempFilterProducts.filter(
              (curElem) => curElem.dealPrice == price
            );
          } else {
            tempFilterProducts = tempFilterProducts.filter(
              (curElem) => curElem.dealPrice <= price
            );
          }
          return {
            ...state,
            filter_products:tempFilterProducts
          }      
    
      default: state;
    }
  }
  export default filterReducer