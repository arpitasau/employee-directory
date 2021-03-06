import React from 'react';
import Employee from "./employee";
import Headers from "./tableHeaders";


export default function (props) {
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr><Headers  /></tr>
                </thead>
                <tbody>
                    <Employee currentSearchValue= {props.currentSearchValue} currentSortState={props.currentSortState}/>
                </tbody>
            </table>
        </>
    )
}