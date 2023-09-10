import React from 'react'

const DataGrid = () => {
  return (
    <div className='py-4'>
      <table class="table">
        <thead>
          <tr className='table-header'>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">Interview ID</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Timezone</th>
            <th scope="col">Interview Status</th>
            <th scope="col">Position</th>
            <th scope="col">Number</th>
            <th scope="col">Panelist</th>
            <th scope="col">Due In</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><input type="checkbox" name="" id="" /></th>
            <td className='primary-color'>MEET-001</td>
            <td>Jim Corbett</td>
            <td>20-07-2023</td>
            <td>08:00 PM PST</td>
            <td>
              <select name="" id="">
                <option value="1">Rejected</option>
                <option value="2">Round 1</option>
                <option value="3">Round 2</option>
              </select>
            </td>
            <td>
            Jr. Angular Developer
            </td>
            <td>
            9969957879
            </td>
            <td>
            Albert Necker 
            </td>
            <td>
            
            <span className='due-in'>4Hr 20M</span>
            </td>
          </tr>
          <tr>
            <th scope="row"><input type="checkbox" name="" id="" /></th>
            <td className='primary-color'>MEET-002</td>
            <td>Jim Corbett</td>
            <td>20-07-2023</td>
            <td>08:00 PM PST</td>
            <td>
              <select name="" id="">
              <option value="1">Rejected</option>
                <option value="2">Round 1</option>
                <option value="3">Round 2</option>
              </select>
            </td>
            <td>
            Jr. Angular Developer
            </td>
            <td>
            9969957879
            </td>
            <td>
            Albert Necker 
            </td>
            <td>
           
            <span className='due-in'> 4Hr 20M</span>
            </td>
          </tr>
          <tr>
            <th scope="row"><input type="checkbox" name="" id="" /></th>
            <td className='primary-color'>MEET-003</td>
            <td>Jim Corbett</td>
            <td>20-07-2023</td>
            <td>08:00 PM PST</td>
            <td>
              <select name="" id="">
              <option value="1">Rejected</option>
                <option value="2">Round 1</option>
                <option value="3">Round 2</option>
              </select>
            </td>
            <td>
            Jr. Angular Developer
            </td>
            <td>
            9969957879
            </td>
            <td>
            Albert Necker 
            </td>
            <td>
            
            <span className='due-in'>4Hr 20M</span>
            </td>
          </tr>
          <tr>
            <th scope="row"><input type="checkbox" name="" id="" /></th>
            <td className='primary-color'>MEET-004</td>
            <td>Jim Corbett</td>
            <td>20-07-2023</td>
            <td>08:00 PM PST</td>
            <td>
              <select name="" id="">
              <option value="1">Rejected</option>
                <option value="2">Round 1</option>
                <option value="3">Round 2</option>
              </select>
            </td>
            <td>
            Jr. Angular Developer
            </td>
            <td>
            9969957879
            </td>
            <td>
            Albert Necker 
            </td>
            <td>
            
            <span className='due-in'>4Hr 20M</span>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default DataGrid