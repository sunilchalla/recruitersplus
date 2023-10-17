import React from 'react'
import { Form } from 'react-bootstrap'

const AllUsers = () => {
    return (
        <div className='py-4'>
            <table class="table">
                <thead>
                    <tr className='table-header'>
                        <th scope="col">
                            <input type="checkbox" />
                        </th>

                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Joined Date</th>
                        <th scope="col">Permissions</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><input type="checkbox" name="" id="" /></th>
                        <td>Jim Corbett</td>
                        <td>Sr. Hr Generalist</td>
                        <td>9969957879</td>

                        <td>
                            jimcorbett00@gmail.com
                        </td>
                        <td>
                            20-07-2023
                        </td>
                        <td>
                            Admin
                        </td>
                        <td>
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><input type="checkbox" name="" id="" /></th>
                        <td>Jim Corbett</td>
                        <td>Sr. Hr Generalist</td>
                        <td>9969957879</td>

                        <td>
                            jimcorbett00@gmail.com
                        </td>
                        <td>
                            20-07-2023
                        </td>
                        <td>
                            Admin
                        </td>
                        <td>
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch4"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><input type="checkbox" name="" id="" /></th>
                        <td>Jim Corbett</td>
                        <td>Sr. Hr Generalist</td>
                        <td>9969957879</td>

                        <td>
                            jimcorbett00@gmail.com
                        </td>
                        <td>
                            20-07-2023
                        </td>
                        <td>
                            Admin
                        </td>
                        <td>
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch2"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><input type="checkbox" name="" id="" /></th>
                        <td>Jim Corbett</td>
                        <td>Sr. Hr Generalist</td>
                        <td>9969957879</td>

                        <td>
                            jimcorbett00@gmail.com
                        </td>
                        <td>
                            20-07-2023
                        </td>
                        <td>
                            Admin
                        </td>
                        <td>
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch1"
                            />
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default AllUsers