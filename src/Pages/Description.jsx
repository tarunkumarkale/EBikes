



import React, { useState } from 'react';
import { one, two, x1b, ipsum } from '../constant/Index';


const Card = ({ img, name, price }) => {
  return (
    <div className="w-[28%] sm:w-[21%] h-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative group">
        <img className="w-full h-auto" src={img} alt={name} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
        <div className="absolute inset-x-0 bottom-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-transform transform translate-y-full group-hover:translate-y-0   mb-14">
          <div className="px-6 py-4 text-gray-400 flex gap-5 ">
            <button className="font-bold px-4 py-2 text-sm bg-white hover:bg-gray-300 hover:text-gray-500 transition duration-300 ease-in-out">
              more info
            </button>

            <button className="font-bold px-4 py-2 text-sm text-white bg-green-600 hover:bg-black transition duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-16">
          <h1 className="text-black font-serif uppercase">{name}</h1>
          <h1 className="text-gray-400 font-serif">Rs: {price}</h1>
        </div>
      </div>
    </div>
  );
};

const Description = () => {
  const imageUrls = [two, one, x1b, ipsum];
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  const cardsData = [
    { id: 1, image: one, name: 'Product 1', price: 3200 },
    { id: 2, image: two, name: 'Product 2', price: 2500 },
 
    { id: 4, image: ipsum, name: 'Product 4', price: 1800 },
  ];

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  let Desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit l Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quibusdam excepturi architecto nesciunt necessitatibus voluptatem quos, placeat perferendis rerum quasi quaerat officia iste impedit similique ex voluptatibus error odit eum itaque optio laboriosam quam culpa. Possimus delectus adipisci perferendis deleniti eos minus quis impedit deserunt expedita a. Error provident ducimus beatae veniam quae sint necessitatibus modi, eius quas nihil alias amet iusto assumenda impedit quo delectus possimus quasi laudantium corrupti perspiciatis totam sunt iste. Accusamus perferendis quia voluptate odio, autem excepturi iure, facere vero molestiae debitis, culpa impedit enim distinctio itaque explicabo facilis blanditiis inventore quibusdam tempora magni accusantium ipsam doloribus. Dolor cupiditate numquam cumque porro cum ipsum a officia hic dolore, possimus sit corrupti animi illo id dolores, sunt deserunt quas repellendus nam nulla iste? Minima recusandae, sunt rem laudantium quod modi sit ab fugiat similique, nulla temporibus dolore consectetur. Expedita doloribus corrupti commodi ullam pariatur iusto exercitationem porro quod ab ad nihil veniam, vitae ducimus quis provident, deserunt suscipit autem amet? Pariatur distinctio ratione voluptatum nesciunt at corrupti tempore enim corporis magni. Inventore nulla minus doloremque nostrum quasi minima quam suscipit provident, iure veritatis, eos hic ipsum error voluptas placeat rerum quo! Nemo, corrupti nam. Laborum quidem cupiditate officiis incidunt libero accusamus nulla dolorum aliquid repellat, ex ullam excepturi architecto explicabo totam ut. Quaerat perferendis atque id harum libero repellat et excepturi, nesciunt, quia ipsam eveniet maiores ipsum obcaecati aperiam pariatur adipisci eligendi corrupti consequatur, laboriosam nulla accusantium? Magnam laborum cupiditate, obcaecati nemo culpa similique aperiam, ea blanditiis recusandae libero vitae pariatur! Similique assumenda dolor exercitationem eos necessitatibus iure quibusdam doloribus alias vitae recusandae iusto, pariatur distinctio velit odio dolore, fugiat excepturi et voluptates rerum quos dignissimos eum, ad architecto? Repudiandae dolor, corrupti dolorum, consequatur iste magni eaque dicta asperiores, veniam ea voluptatum quam? Quibusdam ut magni voluptate et sit, nihil quod sed ducimus, dignissimos molestias provident iusto! Delectus dolor consequatur commodi, dicta neque illo? Expedita nulla iure obcaecati, nostrum quidem porro praesentium facere veritatis aperiam vero adipisci, vel nesciunt enim minima est sed odio reiciendis molestiae, asperiores dolor architecto officia. Optio voluptates sunt tempora laudantium recusandae asperiores! Modi perspiciatis in ducimus nemo expedita perferendis unde libero, rem vitae deserunt nihil veritatis dolorem adipisci consequatur error doloribus ratione fugit, tenetur earum culpa debitis iure et. Error, placeat. Harum ea recusandae blanditiis repellendus asperiores, aut vero dignissimos reprehenderit consectetur labore explicabo vel id alias nam natus dolor iure officiis molestias. Maxime minus odit vel dignissimos delectus distinctio atque error quis at voluptates, vero, architecto ipsam corrupti, numquam ad ipsa accusamus possimus eligendi. Hic modi dolores perspiciatis excepturi repudiandae quam nam ullam porro nobis saepe minima fugiat deserunt, amet ad itaque soluta nesciunt numquam, quaerat eos ut dignissimos. Delectus, quisquam maiores dolorum laudantium non nam, nulla nihil odit provident ea, exercitationem illo? Doloribus, exercitationem nulla rerum dolorem earum pariatur sint maxime cumque numquam laboriosam aperiam esse! Veniam cupiditate soluta delectus, sint adipisci dignissimos vitae minus accusamus consequuntur necessitatibus doloremque error et facilis magni maiores itaque sed. Enim dolores maxime commodi nulla quod consequuntur quisquam esse explicabo ut laudantium quam corporis totam illum voluptatibus est quis unde facilis beatae quibusdam sint atque quae, iusto labore. Suscipit fuga, accusantium vitae praesentium voluptate animi quos deleniti quae quasi modi? Architecto corrupti, ex natus consectetur tenetur doloribus sint nihil sed nulla voluptates nesciunt doloremque officiis adipisci minima quisquam cumque neque quo id voluptatem! Cumque animi corporis corrupti doloribus voluptatum quibusdam quae aliquid totam consectetur harum quasi quis ea, tempora impedit sit veritatis debitis dolorum. Ex, ipsum deleniti? Ipsum accusantium necessitatibus quae delectus atque soluta asperiores dolorum impedit perspiciatis saepe illum blanditiis placeat debitis labore recusandae a officia, non dolore est eum dignissimos tempora? Impedit odit alias, culpa omnis saepe sit libero numquam voluptatem voluptatibus neque consequatur a, laboriosam dolor quibusdam aspernatur aut expedita ad, at ut cum non dolorum. Pariatur et fugit provident laudantium in quam eaque rerum, atque aperiam odio! Doloribus quod odit molestias corrupti modi velit, aliquam minus excepturi ipsum nemo, soluta sit molestiae adipisci vero eligendi dolores assumenda harum perspiciatis accusantium? Repudiandae modi nemo minima, illum exercitationem eius mollitia facere assumenda non. Deserunt facilis molestiae exercitationem cum alias vel, repudiandae veniam itaque, quasi magni accusamus eveniet quia repellat fugiat cumque, optio quod quo illo minus quibusdam odit. Suscipit dolore quibusdam quisquam reprehenderit eum nihil eveniet unde ex nobis dolores tempora ad, porro rerum itaque saepe animi corrupti nam? Tempore amet deserunt, quasi molestias minus debitis sequi dolore saepe voluptate eius ipsa ut nemo rem, est similique molestiae autem quam nostrum laudantium vitae omnis ad aut? Nisi consequatur deserunt, sit repellendus officiis tenetur vitae recusandae, ipsum minus illum quis, nesciunt vero officia velit repellat harum cum suscipit. Quod neque similique iusto vel inventore, atque eligendi sapiente! Sed quas quia laboriosam. Quaerat aliquam aspernatur, eveniet corrupti assumenda sunt facilis sit minima tempore fugiat repellendus ipsam. Eveniet tenetur rerum, ipsam labore doloribus corrupti odit quisquam doloremque numquam beatae fugiat assumenda error consequatur qui suscipit, dignissimos iure nobis architecto ullam nesciunt cupiditate natus facere. Est omnis hic consectetur rerum ullam recusandae, error, asperiores unde pariatur maxime nemo aspernatur dicta illum ab velit sed totam delectus quam? Accusamus voluptas necessitatibus nostrum distinctio. Delectus sit ea omnis odio perspiciatis eius cupiditate! Sit at qui provident aperiam doloremque. Rerum eveniet necessitatibus architecto deleniti sunt reiciendis, commodi quia excepturi culpa distinctio praesentium quas repellat optio consequuntur cum itaque laudantium illo perferendis sint provident explicabo modi veritatis cumque a. Similique voluptatum sequi officia neque est amet velit, corporis et ipsum labore omnis nemo, eligendi fugiat sit quidem saepe recusandae temporibus cupiditate eaque blanditiis consequatur optio. Nam magnam nostrum numquam quas sequi consequatur repudiandae nisi non debitis commodi! Nam quisquam veniam molestiae ex officia minus ea corrupti, laborum atque quaerat modi dolore deleniti blanditiis consequatur esse fugiat mollitia. Amet, laudantium impedit. "; // Your description goes here
  let final_Desc = Desc.slice(0, 800); // Truncate the description

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 overflow-hidden relative">
          <img src={selectedImage} alt="Product Image" className="w-full h-auto md:h-screen transition-transform duration-300 transform hover:scale-110" />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Product Name</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg">$100</p>
          </div>

          <div className="flex mt-2 justify-center md:justify-start">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Thumbnail ${index + 1}`}
                className="w-12 cursor-pointer mx-2 hover:opacity-75"
                onClick={() => handleThumbnailClick(url)}
              />
            ))}
          </div>

          <div className="flex items-center gap-9 mt-3">
            <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">Add to Cart</button>
            <label htmlFor="quantity" className="mr-2">Quantity: 0</label>
          </div>

          <p>Total Items in Cart: <span id="total-items">0</span></p>
          <p>text1</p>
          <p>text2</p>
          <p>text3</p>
          <p>text4</p>
        </div>
      </div>

      <div className='flex justify-start flex-col  p-2  sm:p-20  m-0 sm:m-6'>
        <h1 className='text-4xl m-2 w-[20%]'>Description</h1>
        <p className='text-base border border-gray-500 p-5  '>{final_Desc}</p>
      </div>

      {/* Cards of related products */}
      <div className='flex justify-center items-center mb-2'>
      <h1 className='text-center text-2xl  scale-125 font-extrabold underline'>Related Products </h1>
      </div>
      <div className="flex  flex-wrap justify-around mb-28 mx-2">

        {cardsData.map((card) => (
          <Card key={card.id} img={card.image} name={card.name} price={card.price} />
        ))}
      </div>




    </div>
  );
}

export default Description;
