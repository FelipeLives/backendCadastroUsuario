import './Main.css'
import React from 'react'
import Header from './Header'

// react.fragment é um component especial do react que permite agrupar varios elementos jsx sem adicionar uma 
// tag extra no DOM
export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className='content'>
            conteúdo
        </main>
    </React.Fragment>