import { gql } from "apollo-boost";

export const REGIST_USER = gql`
  mutation registUser(
    $name: String!
    $email: String!
    $nickname: String!
    $mobile: String!
    $zonecode: String!
    $address: String!
    $detailAddress: String!
  ) {
    registUser(
      name: $name
      email: $email
      nickname: $nickname
      mobile: $mobile
      zonecode: $zonecode
      address: $address
      detailAddress: $detailAddress
    )
  }
`;
