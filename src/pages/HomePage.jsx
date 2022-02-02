import React, {useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
export function HomePage(props){

    return(
        <div>
            
            <div className='text-center myTitle myColor'>Shop Online</div>
            <Navbar />
        </div>
    )
}