import React from 'react';
import { useParams } from 'react-router-dom';
import './StatePage.css';

const StatePage = () => {
  const { stateName } = useParams(); 
  console.log("State name from URL:", stateName); // Add this to debug
  console.log("Params object:", useParams()); // Debug log
  
  const stateInfo = {
    'Andaman & Nicobar Island': {
      description: 'A group of islands located in the Bay of Bengal.',
      image: 'andaman_image.jpg', // Replace with actual image path
    },
    'Gujarat': {
        images: ['../src/images/gujarat.jpg'],
        description: `A state in western India, where my parents are from.\n
        Its most popular/well known dish is Dhokla. Dhokla is a light, fluffy, spongy, and savory cake. It is made from a fermneted batter made from chickpea and rice flour that is steamed.\n
        Dhokla's history is traced back to Gujarats vegetarian culture and its emphasis on fermented foods. Fermentation not only enhances the nutritional value of the food 
        but also aligns wit the Jain and Hindu dietary practices that is popular in the region. The roots of Doklha can be traced back centruies ago. The traditional version is thought
        to have been popularized during the ancient times when fermentation was important to preserve the food in the dry, arid climate. It became more common as people from Gujarat 
        begin migrating all over the world. Whats really interesting is since Gujurat is a coastal state, it has a lot of trade with other countries. So, the dish has been influenced by
        many countries. For example, the chickpea flour used in Dhokla is thought to have been brought to India by trade with people from the Mesopotamina region. 

        Dhokla is usually eaten for breakfast or as a snack. It is usually served with a green chutney or a yellow curry. Personally, my mom makes it as a snack once in a while with curry.
        
        Below are a few recipes to make Dhokla:
        
        https://rakskitchen.net/dhokla-recipe-how-to-make-soft-spongy-dhokla/
        
        https://www.indianhealthyrecipes.com/khaman-dhokla/`,
    },
    'Kerala': {
        images: ['../src/images/kerala_land.webp', '../src/images/kerala.jpg'], // Array of image paths

        description:`A state in southern India known for its tropical climate, palm-lined beaches and backwaters. Inland are the Western Ghats, whose mountains support tea, coffee and spice plantations. Filled with wildlife, national parks, and sanctuaries, Kerala is a big tourist attraction in India.
        
        Since many spices grow in Kerala, they don't have a single dish that they are known for. However, one of the most popular foods in the region is Kerala Paratha (flatbread). I've had this flatbread before and never knew that it came from Kerala. Compared to other flatbreads which are just like bread, Kerala Paratha is known for its layered texture. It is flaky, crispy, buttery, and melts in your mouth. It is made from all pupose flour. Recipes for this requrie a lot of kneading and folding to get the layers.

        The history of the Kerala paratha can be traced back to the Malabar region of Kerala. Known for its non vegatarian cuisine. The Malabar region was a major trading hub for spices and other goods. The Malabar region was influenced by Arab traders and European colonizers. 
        
        The Kerala paratha is thought to have come from Lukhmi, which is an Arabian meat filled pastry. The Kerala paratha is usually eaten with a fish curry or chutney. The dishes eaten with the paratha are heavily influenced by Kerals tropical climate, agriculture, and access to seafood. 
        
        https://www.tastycircle.com/recipe/parotta-paratha-porotta/
        
        https://www.whiskaffair.com/kerala-parotta-recipe/`,
    },
    'Rajasthan': {
      images: ['../src/images/rajasthan.jpg'],
      description: `Sitting above Gujarat is Rajasthan. With little availability of fresh fruits and vegetables, their cuisine distinguishes them from the rest.

      A few common ingredients are beans, lentils, gram flour, corn, barley, millet, bajra, bread, and dairy products like Ghee (purified butter). The general cuisine is mostly vegetarian, but there are some meat based dishes. Rajasthan is famous for its Dal Bati Churma

      Dal Bati Churma is a traditional, tasty meal made as a combo of savoury dal (lentils)l, deep fried wheat dough (bati) and crumbled, sweetened & flavoured bati (churma).`
    },
    'Haryana': {
      images: ['../src/images/haryana.jpg'],
      description: `Haryana is a state in northern India. It is known for its agriculture and dairy products. The state is known for its rich culture and heritage.
      The state has a rich history and is known for its Ker Sangri, which is made with dried Ker berries and Sangri beans. The ker berries are native to Haryana. The dish is usually eaten with roti, which is very commong in India.`
    },
    // Add more states and their info here
    'Punjab': {
      images: ['../src/images/punjab.jpg'],
      description: `Punjab is a state in northern India. The state is known for its rich culture and heritage.
      The state is known for its Sarson ka Saag, among many other things. This is a seasonal dish mostly in the winter. In India, they have seasonal dishes, using whatever is in season, and it makes for some great food.
      
      Sarson ka Saag is a dish made from mustard greens and spices. It also is eaten with roti. It is very nutrious and is a great source of vitamins and minerals.`
    },
    'Jammu & Kashmir': {
      images: ['../src/images/kashmir.jpg'],
      description: `Kashmir is a region in northern India known for its stunning natural beauty, including the Himalayan mountain range, lush valleys, and beautifal lakes with mountainous backgrounds.

      Their most popular dish is Rogan Josh. This is a type of curry made with  lamb cooked in a sauce made from garlic, yogurt, and various spices. The dish uses dried Kashmiri chilies.

      The history of Rogan Josh can be traced back to Persian cuisine, which was introduced to the region by the Mughals. Eventually it incorporate local ingredients, making it unique of Kashmir.

      Rogan Josh is typically served with rice or naan.


      https://www.bbcgoodfood.com/recipes/lamb-rogan-josh`
    },
    'Ladakh': {
      images: ['../src/images/ladakh.webp'],
      description: `Ladakh is another region in north India known for its stunning landscapes, mountains, high altitude deserts, and monasteries.

      One of the most popular dishes in Ladakh is Thukpa, a noodle soup that is hearty and warming, perfect for the cold climate of the region. Thukpa is made with noodles, vegetables, and sometimes meat.

      The history of Thukpa can be traced back to Tibetan cuisine, which has influenced the food culture of Ladakh due to its close proximity to Tibet.

      Thukpa is tmostly eaten during the winter months

      https://www.vegrecipesofindia.com/thukpa-recipe-veg-thukpa/`
    },
    'Uttar Pradesh': {
      images: ['../src/images/uttar_pradesh.jpg'],
      description: `Uttar Pradesh is a state in northern India known for its historical monuments, including the Taj Mahal.

      One of the most popular dishes in Uttar Pradesh is the Tunday Kebab, a kebab made from minced meat and a blend of spices. The dish is known for its soft texture and rich flavor.

      The history of the dish dates back to the Mughal empire, and it is said to have been created by a one-armed chef, hence the name "Tunday" which means "one-armed" in Hindi.

      Tunday Kababi is typically served with paratha(flatbread), naan, or sometimes roti.

      https://www.cookingwithsiddhi.com/tunday-kababi-recipe/`
    },
    'Madhya Pradesh': {
      images: ['../src/images/madhya_pradesh.jpg'],
      description: `A state in central India known for its rich heritage, and natural beauty.

      One of the most popular dishes in Madhya Pradesh is Poha. My mom ahas been making this since I was a kid and at one point it was my favorite thing to eat for breakfast.
      
      Poha is a light and nutritious breakfast from flattened rice, onions, and various spices. Usually garnished with fresh coriander, sev, and a squeeze of lemon juice.

      The history of Poha can be traced back to the Malwa area of Madhya Pradesh, where it has been a classic breakfast item for centuries. The dish is known for its simplicity.

      https://www.vegrecipesofindia.com/poha-recipe-kanda-poha/`
    },
    'Maharashtra': {
      images: ['../src/images/Maharashtra.jpg'],
      description: `A state in western India known for its colorful culture, history, and cuisine.

      One of the most popular dishes in Maharashtra is Vada Pav, a street food snack made from a potato patty that is deep-fried served in a bun with multiple chutneys.

      The history of the Vada Pav can be traced back to the city of Mumbai, where it was created as a cheap and filling snack for the working class.

      Vada Pav is usually served with chutneys and fried green chilies.

      https://www.vegrecipesofindia.com/vada-pav-how-to-make-wada-pav/`
    },
    'Karnataka': {
      images: ['../src/images/karnataka.jpg'],
      description: `Karnataka is a state in south west India known for its diverse culture.

      One of the most popular dishes in Karnataka is Bisi Bele Bath, a spicy rice dish made with lentils, vegetables, and unique spices.

      The history of Bisi Bele Bath can be traced back to the Mysore Palace, where it was created as a royal dish. The name translates to 'hot lentil rice' (which isn't that fancy).

      Bisi Bele Bath is usually served with papadum and a side of yogurt.

      https://www.vegrecipesofindia.com/bisi-bele-bath-recipe/`
    },
    'Tamil Nadu': {
      images: ['../src/images/tamil_nadu.webp'],
      description: `Tamil Nadu is a state in southern India known for its intricate Dravidian style Hindu temples and ancient history (like much of India).

      One of the most popular dishes in Tamil Nadu is Dosa, which is a thin, crispy "pancake". The batter is similar to crepes, which is very wet, although this is made from fermented rice and lentils.

      The history of Dosa can be traced back to ancient Tamil literature, where it was mentioned as a staple food. It is believed to have originated in the Udupi region of Karnataka but became popular in Tamil Nadu.

      Dosa is usually served with sambar (a lentil-based vegetable stew) and coconut chutney, although there are many variations. 

      https://www.vegrecipesofindia.com/dosa-recipe-dosa-batter-recipe/`
    },
    'Andhra Pradesh': {
      images: ['../src/images/andhra_pradesh.jpg'],
      description: `A state in southeastern India known for its rich cultural heritage and spicy cuisine.

      One of the most popular dishes in Andhra Pradesh is Hyderabadi Biryani, a famous rice dish made with basmati rice, meat (usually chicken or mutton), and a blend of aromatic spices.

      The history of Hyderabadi Biryani can be traced back to the Mughal empire, where it was created in the Nizam of Hyderabad. The dish has since become a staple in the region and is enjoyed by people across the world.

      Hyderabadi Biryani is usually served with raita (a yogurt-based side dish).

      https://www.vegrecipesofindia.com/hyderabadi-biryani-recipe/`
    },
    'Telangana': {
      images: ['../src/images/telangana.webp'],
      description: `Telangana is a state in southern India known for its rich history, culture, and cuisine.

      One of the most popular dishes in Telangana is Pachi Pulusu, a traditional tamarind-based stew made with raw mangoes, onions, and spices.
      It is a tangy and spicy dish that is usually served with rice or roti.

      The history of Pachi Pulusu can be traced back to the Telangana region, where it has been a traditional dish for centuries.`,

    },
    'Chhattisgarh': {
      images: ['../src/images/chhattisgarh.jpg'],
      description: `Chhattisgarh is a state in central India known for its rich cultural heritage and natural beauty.

      One of the most popular dishes in Chhattisgarh is Muthiya, a traditional dish made from grated lauki is mixed with chickpea flour and spices. Then is it steamed with mustard seeds and curry leaves. Like a lot of Indian food, it is relatively healthy and nutritous..

      The history of Muthiya can be traced back to the rural areas of Chhattisgarh, where it has been a staple food for centuries. The dish is known for its simplicity and nutritional value.


      https://www.vegrecipesofindia.com/chana-samosa-recipe/`
    },
    'Odisha': {
      images: ['../src/images/odisha.jpg'],
      description: `Odisha is a state in eastern India known for its ancient temples and tribal cultures.

      One of the most popular dishes in Odisha is Chhena Poda which is a dessert made from fresh paneer (similar to tofu, but made with milk), sugar, and cardamom. The dish is baked until it is golden and has a caramelized crust. 
      
      It is a sweet dish that is usually served as a dessert and/or snack. 


      https://www.vegrecipesofindia.com/pakhala-bhat-recipe/`

    },
    'West Bengal': {
      images: ['../src/images/west_bengal.jpg'],
      description: `West Bengal is a state in eastern India known for its rich cultural heritage and literature.

      One of the most popular dishes in West Bengal is Macher Jhol (fish curry). It is a traditional dish made with fish, potatoes, tomatoes, and a mix of spices.

      The history of Macher Jhol can be traced back to the traditional Bengali cuisine, where fish is a staple food due to the large amounts of rivers and water bodies in the region.

      Macher Jhol is usually served with steamed rice.

      https://www.vegrecipesofindia.com/macher-jhol-recipe/`
    },
    'Jharkhand': {
      images: ['../src/images/jharkhand.jpg'],
      description: `Jharkhand is a state in eastern India known for its hills, waterfalls, and vast mineral resources.

      One of the most popular dishes is Thekua, a traditional sweet snack made from wheat flour, jaggery (cane sugar), and coconut. It is deep fried and has a crunchy texture and the flavor is sweet and earthy.

      The history of Thekua can be traced back to the Chhath Puja festival, where Hindus offered as a religious offering to the Sun God.

      Thekua is usually enjoyed as a snack with tea or as a dessert.

      https://www.vegrecipesofindia.com/thekua-recipe/`
    },
    'Bihar': {
      images: ['../src/images/bihar.jpg'],
      description: `Bihar is a state in eastern India known for its ancient history, monuments, and heritage.

      One of the most popular dishes in Bihar is Litti Chokha, a traditional dish made from wheat flour dough filled with roasted gram flour and spices, served with mashed vegetables.

      The history of Litti Chokha can be traced back to the Magadha region of Bihar, where it has been a staple food for centuries. The dish is known for its earthy flavor and nutritional value, like most Indian foods..

      Litti Chokha is usually served with ghee (clarified butter) and is eaten as lunch or dinner.

      https://www.vegrecipesofindia.com/litti-chokha-recipe/`
    },
    'Uttarakhand': {
      images: ['../src/images/uttarakhand.jpg'],
      description: `Uttarakhand is a state in northern India known for its scenic beauty, including the Himalayas, forests, wildlife, and rivers.

      One of the most popular dishes in Uttarakhand is Kafuli, a traditional dish made from green leafy vegetables like spinach and fenugreek, cooked with rice or wheat flour and seasoned with spices. It is a nutritious and flavorful dish that is often enjoyed during the winter months. It is really good for you and can help you lose weight whole also keeping you fuull

      The history of Kafuli can be traced back to the regions of Uttarakhand, where it has been a staple food for centuries. The dish is known for its simplicity and nutritional value, providing warmth in the cold climate.

      Kafuli is usually served with steamed rice or roti.

      https://www.vegrecipesofindia.com/kafuli-recipe/`
    },
    'Himachal Pradesh': {
      images: ['../src/images/himachal_pradesh.jpg'],
      description: `Himachal Pradesh is a beautifal state in northern India known for its scenic mountain towns and resorts.

      One of the most popular dishes in Himachal Pradesh is Dham, a traditional feast that includes rice, dal, rajma, curd, and sweet dishes. It is usually served during festivals and special occasions.

      The history of Dham can be traced back to the Chamba region of Himachal Pradesh, where it has been a traditional feast for centuries...

      Dham is usually served on leaf plates and enjoyed with family and friends.

      https://www.vegrecipesofindia.com/dham-recipe/`
    },

  };


  const info = stateInfo[stateName] || { description: 'No information available', image: '' };

  return (
    <div>
    <h1>{stateName || 'Unknown State'}</h1>
    {info.images &&
    info.images.map((image, index) => (
      <img key={index} src={image} alt={`${stateName} image ${index + 1}`} className="state-image" />
    ))}    <div>
        <p dangerouslySetInnerHTML={{ __html: info.description.replace(/\n/g, '<br />') }}></p>
    </div>
  </div>
  );
};

export default StatePage;
