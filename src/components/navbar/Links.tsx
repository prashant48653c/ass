

import { useAppDispatch, useAppSelector } from '@/redux/hooks/hook';
import { selectQuery, setSearchQuery } from '@/redux/slices/blogSlice';
import Link from 'next/link'
const Links:React.FC = () => {

interface linkItem{
title:string;
path:string;
inFeed:boolean;
}

const links:linkItem[] = [
{
title: "Home",
path: "/",
inFeed:true
},
{
title: "About",
path: "/about",
inFeed:true

},
{
title: "Contact",
path: "/contact",
inFeed:true

},
{
title: "Blog",
path: "/feed",
inFeed:false

},
{
    title: "Write",
    path: "/create",
    inFeed:false
    
    },
];
const dispatch=useAppDispatch()
const searchQuery=useAppSelector(selectQuery)
const handleClick=async()=>{
     dispatch(setSearchQuery({user:'',page:1,tags:[],keyword:''}))
}
return (
<>
{
links.map((link:linkItem,i:number)=>{
return (
<li key={i} >
<Link className='navLink' onClick={handleClick} href={link.path}>{link.title}</Link>

</li>
)
})
}

</>
)
}

export default Links