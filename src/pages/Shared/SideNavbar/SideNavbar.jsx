import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UtilityContext } from '../../../Contexts/Utility/UtilityProvider';

const SideNavbar = ({contentHeight}) => {
    const {screenWidth} = useContext(UtilityContext)
    return (
        <div className='w-[80vw] md:w-60 
        border overflow-y-scroll 
        absolute top-[65px] z-40
        md:sticky 
        pt-4
         bg-white
        flex flex-col 
        '
        
            style={{ height:
                screenWidth<768 ?
                contentHeight :
    
             'calc(100vh - 57px)'
             
             
             }}
        >
            <div className="relative">

                <div className="">
                    <Link className='block' to='/subcategory/ja'>2</Link>
                    <Link className='block' to='/subcategory/ja'>1</Link>
                    <Link className='block' to='/subcategory/ja'>3</Link>
                    <Link className='block' to='/subcategory/ja'>4</Link>
                    <Link className='block' to='/subcategory/ja'>5</Link>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum asperiores voluptatum pariatur maiores delectus architecto aperiam quis exercitationem sit blanditiis facilis rem quod aliquam excepturi, in soluta eaque, explicabo, ut dicta. Cupiditate deleniti, perspiciatis ipsam omnis suscipit culpa ratione est maiores at fugit provident eaque error! Dolore dolorum nihil in odit repellendus itaque, architecto eligendi odio ad, fugit ipsum ducimus, repellat praesentium veritatis ratione ab dolores porro quo non laborum maxime. Pariatur alias incidunt deserunt rerum molestiae minus fugit earum odio id nam sapiente, maxime, laborum vel deleniti temporibus impedit? Iure, molestias? Fuga alias doloremque dicta consectetur rem repellat nobis animi, laborum facilis reiciendis nulla voluptatibus enim quisquam dignissimos ad unde similique porro, culpa fugit distinctio ea. Doloribus tempora nostrum quis suscipit. Facere omnis quam commodi voluptate asperiores exercitationem aspernatur repellat iusto aut maxime aperiam nisi assumenda harum sunt eum vel, quaerat nam nemo amet, natus ipsum? Modi ut reprehenderit vitae dolores, excepturi vero incidunt doloribus! Quia aperiam ut architecto impedit, iure non alias! Quas eveniet quo, impedit harum earum aut dignissimos vitae esse cumque quae repudiandae ad porro sit reiciendis, ratione iusto qui eaque odit. Quaerat nobis neque quos expedita illum facilis numquam aperiam veritatis, itaque sequi atque. Cum, voluptatibus. Magni fugit quidem iste! Perferendis, magni. Amet magni aut, unde consectetur, eligendi inventore quam hic fuga alias tenetur repellat, at saepe? Error aliquid distinctio, consequatur nemo sint, nisi voluptatem quia beatae eius recusandae facere perspiciatis! Sunt qui blanditiis nam eaque? Corrupti quas eaque aperiam dolorem voluptates nesciunt hic possimus quam voluptate voluptatum temporibus quisquam non esse repudiandae provident aliquam, error fugit fuga eligendi maxime unde iste culpa. Cum quam soluta, delectus provident corrupti ipsum sint saepe unde libero. Explicabo deleniti repellendus quisquam cumque, illum debitis, dolor provident expedita nihil itaque error minus ullam labore sed eveniet magni, saepe maiores ea cupiditate facilis at adipisci? Debitis non nostrum voluptate eos! Repudiandae consequatur veritatis suscipit error ea, alias id, nobis velit explicabo earum molestias doloribus animi nulla distinctio voluptates quidem labore aperiam vero provident! Recusandae cumque ipsum perferendis dolorum earum? Sequi nulla fugiat iusto illum tempore dolores enim nostrum laudantium hic architecto repudiandae illo suscipit recusandae, culpa soluta debitis, dicta ipsam repellat iste cumque consequuntur? Optio, expedita minima non, totam sed architecto eius exercitationem ut tenetur veritatis rerum aliquam harum, nisi maxime a quisquam! Necessitatibus commodi placeat deleniti vero eaque accusantium cumque aspernatur unde, consequuntur dolor, corporis, magnam deserunt ex!
                    <Link to='/subcategory/ja'>ja ja</Link>
                </div>


                <div className="sticky bottom-0 bg-black  text-white">
                    hdhfsdsh
                </div>
            </div>



        </div>
    );
};

export default SideNavbar;