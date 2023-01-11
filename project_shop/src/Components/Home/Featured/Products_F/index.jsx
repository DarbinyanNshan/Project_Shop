import "./style.css";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { GoSync } from "react-icons/go";
import { BiSearch } from "react-icons/bi";





function Product_F(props){



    return (
        <div className="featured"> 
            <div className="featured_1"  >
                <img src={props.img_1} alt="nkar" />
                <div className="featured_btn" >
                    <button className="featured_btn1"><FaShoppingCart/></button>
                    <button className="featured_btn1"><AiOutlineHeart/></button>
                    <button className="featured_btn1"><GoSync/></button>
                    <button className="featured_btn1"><BiSearch/></button>
                    </div>
                <div className="featured_bg" >
                <h6 className="featured_title2">{props.title}</h6>
                <p className="featured_price">{props.price}<s>{props.price}</s></p>
                <p className="featured_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                <span className="featured_star_text">(99)</span>
                </p>
                </div>
            </div>

            <div className="featured_1"  >
            
                <img src={props.img_2} alt="nkar" />
                <div className="featured_btn" >
                    <button className="featured_btn1"><FaShoppingCart/></button>
                    <button className="featured_btn1"><AiOutlineHeart/></button>
                    <button className="featured_btn1"><GoSync/></button>
                    <button className="featured_btn1"><BiSearch/></button>
                    </div>
                   
                <div className="featured_bg" >
                <h6 className="featured_title2">{props.title}</h6>
                <p className="featured_price">{props.price}<s>{props.price}</s></p>
                <p className="featured_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf />
                <span className="featured_star_text">(99)</span>
                </p>
                </div>
            </div>

            <div className="featured_1"  >
                <img src={props.img_3}  alt="nkar"/>
                <div className="featured_btn" >
                    <button className="featured_btn1"><FaShoppingCart/></button>
                    <button className="featured_btn1"><AiOutlineHeart/></button>
                    <button className="featured_btn1"><GoSync/></button>
                    <button className="featured_btn1"><BiSearch/></button>
                    </div>
                <div className="featured_bg" >
                <h6 className="featured_title2">{props.title}</h6>
                <p className="featured_price">{props.price}<s>{props.price}</s></p>
                <p className="featured_star"><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/><AiOutlineStar />
                <span className="featured_star_text">(99)</span>
                </p>
                </div>
            </div>

            <div className="featured_1"  >
                <img src={props.img_4}  alt="nkar" />
                <div className="featured_btn" >
                    <button className="featured_btn1"><FaShoppingCart/></button>
                    <button className="featured_btn1"><AiOutlineHeart/></button>
                    <button className="featured_btn1"><GoSync/></button>
                    <button className="featured_btn1"><BiSearch/></button>
                    </div>
                <div className="featured_bg" >
                <h6 className="featured_title2">{props.title}</h6>
                <p className="featured_price">{props.price}<s>{props.price}</s></p>
                <p className="featured_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar />
                <span className="featured_star_text">(99)</span>
                </p>
                </div>
            </div>

            <div className="featured_1"  >
                <img src={props.img_5} alt="nkar" />
                <div className="featured_btn" >
                    <button className="featured_btn1"><FaShoppingCart/></button>
                    <button className="featured_btn1"><AiOutlineHeart/></button>
                    <button className="featured_btn1"><GoSync/></button>
                    <button className="featured_btn1"><BiSearch/></button>
                    </div>
                <div className="featured_bg" >
                <h6 className="featured_title2">{props.title}</h6>
                <p className="featured_price">{props.price}<s>{props.price}</s></p>
                <p className="featured_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                <span className="featured_star_text">(99)</span>
                </p>
                </div>
            </div>

            <div className="featured_1"  >
                <img src={props.img_6}  alt="nkar" />
                <div className="featured_btn" >
                    <button className="featured_btn1"><FaShoppingCart/></button>
                    <button className="featured_btn1"><AiOutlineHeart/></button>
                    <button className="featured_btn1"><GoSync/></button>
                    <button className="featured_btn1"><BiSearch/></button>
                    </div>
                <div className="featured_bg" >
                <h6 className="featured_title2">{props.title}</h6>
                <p className="featured_price">{props.price}<s>{props.price}</s></p>
                <p className="featured_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf />
                <span className="featured_star_text">(99)</span>
                </p>
                </div>
            </div>

            <div className="featured_1"  >
                <img src={props.img_7}  alt="nkar" />
                <div className="featured_btn" >
                    <button className="featured_btn1"><FaShoppingCart/></button>
                    <button className="featured_btn1"><AiOutlineHeart/></button>
                    <button className="featured_btn1"><GoSync/></button>
                    <button className="featured_btn1"><BiSearch/></button>
                    </div>
                <div className="featured_bg" >
                <h6 className="featured_title2">{props.title}</h6>
                <p className="featured_price">{props.price}<s>{props.price}</s></p>
                <p className="featured_star"><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/><AiOutlineStar />
                <span className="featured_star_text">(99)</span>
                </p>
                </div>
            </div>
            
            <div className="featured_1"  >
                <img src={props.img_8}  alt="nkar" />
                <div className="featured_btn" >
                    <button className="featured_btn1"><FaShoppingCart/></button>
                    <button className="featured_btn1"><AiOutlineHeart/></button>
                    <button className="featured_btn1"><GoSync/></button>
                    <button className="featured_btn1"><BiSearch/></button>
                    </div>
                <div className="featured_bg" >
                <h6 className="featured_title2">{props.title}</h6>
                <p className="featured_price">{props.price}<s>{props.price}</s></p>
                <p className="featured_star"><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/>
                <span className="featured_star_text">(99)</span>
                </p>
                </div>
            </div>
        </div>
    )
}
export default Product_F;