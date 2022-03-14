import React from 'react'

function FilterList({statename}) {
  return (
    <>
      <option value={statename}>{statename}</option>
    </>
  )
}

export default FilterList