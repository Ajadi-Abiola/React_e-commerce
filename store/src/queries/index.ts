
import { gql } from "@apollo/client";

export const query = gql`
{
  categories {
    name
    products {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      brand
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
  currencies {
    label
    symbol
  }
}
`;