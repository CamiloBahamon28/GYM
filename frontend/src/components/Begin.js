import React from 'react'
// import './Begin.css'

export const Begin = ({imageSrc}) => {
	return (
		<div className="relative w-full h-screen" >
			<img src={imageSrc} alt="Gym" className="w-full h-full object-cover absolute" />
			<h1 className="absolute bottom-11 right-8 text-white text-7xl p-10">GYM D&K</h1>
		</div>
	)
}
