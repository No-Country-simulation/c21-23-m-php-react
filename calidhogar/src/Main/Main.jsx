import React from 'react'
import "./Main.css"
import AdoptaAmor from '../components/AdoptaAmor/AdoptaAmor'
import PQImportante from '../components/PQImportante/PQImportante'
import Divider1 from '../components/Divider1/Divider1'
import Divider2 from '../components/Divider2/Divider2'
import CardMain from '../components/CardMain/CardMain'

export default function Main() {
  return (
    <>
    <AdoptaAmor />
    <PQImportante />
    <Divider1 />
    <CardMain />
    <Divider2 />
    </>
  )
}
