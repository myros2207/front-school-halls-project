import {FC, useEffect, useState} from "react";
import LiveSearch from "./LiveSearch";
import axios from 'axios';

// interface Props {
// }
interface Props {}


const DropDownComponent : FC<Props> = (props): JSX.Element => {

    const [teachName, setTeachName] = useState([])
    const [teachId, setTeachId] = useState([])
        const profiles = [
            {id: teachId.toString(), name: teachName.toString()},
            // {id: "2", name: "Aida Bugg"},
            // {id: "3", name: "Gabrielle"},
            // {id: "4", name: "Grace"},
            // {id: "5", name: "Hannah"},
            // {id: "6", name: "Heather"},
            // {id: "7", name: "John Doe"},
            // {id: "8", name: "Anne Teak"},
            // {id: "9", name: "Audie Yose"},
            // {id: "10", name: "Addie Minstra"},
            // {id: "11", name: "Anne Ortha"},
        ];
    const [allTeacher, setAllTeacher] = useState([])
    useEffect(() => {
        GetAllTeachers()
    }, []);

        const GetAllTeachers = async () => {
            try {
                const teach = await axios.get("http://localhost:3000/teachers")
                console.log(teach.data)
                console.log(teach.data.teacherFirstName)
                setAllTeacher(teach.data)
                // @ts-ignore
                setTeachName(allTeacher.map(t => t.teacherFirstName))
                // @ts-ignore
                setTeachId(allTeacher.map(t => t.teacherId))
                // @ts-ignore
            }
            
            catch (error) {

            }
            console.log(teachName)
            console.log(teachName.map(n=> n))
        }
        const [results, setResults] = useState<{ id: string; name: string }[]>();
        const [selectedProfile, setSelectedProfile] = useState<{
            id: string;
            name: string;
        }>();

        type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
        const handleChange: changeHandler = (e) => {
            const {target} = e;
            if (!target.value.trim()) return setResults([]);

            const filteredValue = profiles.filter((profile) =>
                // @ts-ignore
                profile.name.toLowerCase().startsWith(target.value)
            );
            // @ts-ignore
            setResults(filteredValue);
        };
        return (
            <>
                {/*<LiveSearch*/}
                {/*    results={results}*/}
                {/*    value={selectedProfile?.name}*/}
                {/*    renderItem={(item) => <p>{item.name}</p>}*/}
                {/*    onChange={handleChange}*/}
                {/*    onSelect={(item) => setSelectedProfile(item)}*/}
                {/*/>*/}
                {/*<button onClick={GetAllTeachers}>Get</button>*/}
                {/*<div>{*/}
                {/*    allTeacher.map(t =>*/}
                {/*    //     @ts-ignore*/}
                {/*    <h1>{t.teacherFirstName}</h1>*/}
                {/*    )*/}
                {/*}</div>*/}
                {/*@ts-ignore*/}

            </>
        );
    };

export default DropDownComponent;

//
// import React, {useState} from 'react';
//
// import Select from 'react-select';
// import axios from "axios";
// import {useEffect} from 'react';
// // import { colourOptions } from '../data';
//
// const Checkbox = ({children, ...props}: JSX.IntrinsicElements['input']) => (
//     <label style={{marginRight: '1em'}}>
//         <input type="checkbox" {...props} />
//         {children}
//     </label>
// );
//
// const DropDownComponent = () => {
//     const [isClearable, setIsClearable] = useState(true);
//     const [isSearchable, setIsSearchable] = useState(true);
//     const [isDisabled, setIsDisabled] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isRtl, setIsRtl] = useState(false);
//     const [allTeacher, setAllTeacher] = useState([])
//     const [teacherName, setTeacherName] = useState([])
//
//     useEffect(() => {
//         GetAllTeachers()
//     }, []);
//
//     const GetAllTeachers = async () => {
//         try {
//             const teach = await axios.get("http://localhost:3000/teachers")
//             console.log(teach.data)
//             setAllTeacher(teach.data)
//             // @ts-ignore
//             setTeacherName(allTeacher.map(t => t.teacherFirstName))
//         }
//         catch {
//
//         }
//         console.log(typeof allTeacher)
//         // @ts-ignore
//         // console.log(allTeacher.data.teacherFirstName)
//         console.log(allTeacher)
//
//     }
//
//     return (
//         <>
//             <Select
//                 className="basic-single"
//                 classNamePrefix="select"
//                 defaultValue={allTeacher[0]}
//                 isDisabled={isDisabled}
//                 isLoading={isLoading}
//                 isClearable={isClearable}
//                 isRtl={isRtl}
//                 isSearchable={isSearchable}
//                 name="color"
//                 options={allTeacher}
//             />
//
//             <div
//                 style={{
//                     color: 'hsl(0, 0%, 40%)',
//                     display: 'inline-block',
//                     fontSize: 12,
//                     fontStyle: 'italic',
//                     marginTop: '1em',
//                 }}
//             >
//                 <Checkbox
//                     checked={isClearable}
//                     onChange={() => setIsClearable((state) => !state)}
//                 >
//                     Clearable
//                 </Checkbox>
//                 <Checkbox
//                     checked={isSearchable}
//                     onChange={() => setIsSearchable((state) => !state)}
//                 >
//                     Searchable
//                 </Checkbox>
//                 <Checkbox
//                     checked={isDisabled}
//                     onChange={() => setIsDisabled((state) => !state)}
//                 >
//                     Disabled
//                 </Checkbox>
//                 <Checkbox
//                     checked={isLoading}
//                     onChange={() => setIsLoading((state) => !state)}
//                 >
//                     Loading
//                 </Checkbox>
//                 <Checkbox checked={isRtl} onChange={() => setIsRtl((state) => !state)}>
//                     RTL
//                 </Checkbox>
//             </div>
//         </>
//     );
// };
//
// export default DropDownComponent
