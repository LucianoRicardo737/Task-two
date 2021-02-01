import { gql } from "apollo-boost";

export const getSellerPublication = gql`
{
  getSellerPublications(sellerId:"4cc88cdc-2d92-47ff-ab3f-9831367b889c"){
         product{
             itemName
             images
         }
         price
         stock
       }
    }
`;