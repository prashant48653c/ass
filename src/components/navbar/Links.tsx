import Link from 'next/link'
const Links:React.FC = () => {

    interface linkItem{
        title:string;
        path:string;
        inFeed:boolean;
    }

    const links:linkItem[] = [
        {
          title: "Homepage",
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
          path: "/blog",
          inFeed:false

        },
      ];
  return (
    <>
    {
        links.map((link:linkItem,i:number)=>{
            return (
                <li key={i} >
                <Link className='navLink' href={`/${link.path}`}>{link.title}</Link>
              </li>
            )
        })
    }
        
    </>
  )
}

export default Links