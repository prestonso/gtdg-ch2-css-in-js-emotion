import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Header = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.5rem;
  background-color: blue;
  color: white;
`
export default function Home({ children }) {
  return (
    <Header>
      <div>Welcome to my Gatsby site!</div>
    </Header>
  )
}
