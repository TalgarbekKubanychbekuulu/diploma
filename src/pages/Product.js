import { useParams } from "react-router-dom";
import Headers from "../Components/Headers/Headers";
import { getProducts } from "../data/Products";

function Product() {
  const params = useParams();
  const product = getProducts(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
         <main className="d-flex flex-column">
            <div>
                <Headers fone='/img_coverimage/1.webp' tColor='rgb(0, 255, 255)'/>
            </div>
            <div className="mainPage homePage">
                <h1><span style={{color: 'aqua'}}>|</span> What Is Accessorizing?</h1>
                <p>Accessorizing is a way to spice up your outfits by incorporating smaller pieces, like jewelry and shoes, into your look. Fashion accessories are pieces that, although they can serve practical functions, are chosen to complement the rest of an outfit—the finishing touches. Accessorizing allows you to add new energy to the old standbys in your capsule wardrobe.</p>

                <img src="https://puzzleit.ru/files/puzzles/222/221807/_original.jpg" alt="/"/>

                <h1>Accessories in fashion : An overview of the 30 most important accessories</h1>
                <p className="data">Last Updated on January 10, 2022 by Sarina</p>

                <p>It is said that people look at your shoes and your watch and then judges you in the first 3 seconds that you meet – if that is how much time you get to make a good impression, there is reason enough to work hard on your accessories for that favorable impression you want. Here is a list of the most important accessories that I can count and that can be counted on to take your fashion style to a different dimension</p>

                <h2>What are Accessories in fashion?</h2>
                <b>An accessory can be said to be anything you wear or carry other than your clothes.</b>

                <p>Famous fashion designer Oscar De la Renta said: “A woman makes an outfit her own with accessories”. The importance of accessories cannot be better summed up than thus but this is true for men and women. Accessories aim to enhance the effect of clothes you wear- whether they succeed or not depends on your sense of style, the trend in fashion at that particular time and the context.</p>

                <br/><br/>
                <img src="https://puzzleit.ru/files/puzzles/222/221807/_original.jpg" alt="/"/>

                <h1><span style={{color: 'aqua'}}>|</span>6 Types of Fashion Accessories</h1>
                <h3>Accessories fall into a few basic categories.</h3>

                <p>Footwear: Unlike other accessories, you’ll most likely need to wear shoes every day. Although it’s important to have a few neutral footwear options in your capsule collection (such as a white sneaker, nude heel, black flat, and black or brown boots), statement footwear can elevate your look. Look for shoes that are fun yet comfortable—or else you’ll never wear them.</p>
                <p>Jewelry: Whether your jewelry box contains just one nice watch or a host of bangles, statement necklaces, chandelier earrings, and chokers, you probably turn to jewelry when you’re looking to add a little sparkle to your look. If you’re new to jewelry, start with a subtle piece of jewelry like little diamond studs, thin hoop earrings, or a delicate pendant necklace—classic pieces that will work with almost anything.</p>
                <p>Hair accessories: Hair accessories offer an easy way to show off your personal style. Take a look at your current hair accessories and see if there’s room for an upgrade: Can you swap a plain hair tie for a silk scrunchie? A plain clip for a colorful acetate one?</p>
                <b>Handbags: Different bags—from totes to clutches—are appropriate for different occasions. If you have handbags in varied styles and colors, you’ll always have a unique accessory.</b>
                <i>Belts: Belts aren’t just for function; they’re for fashion, too. Whether you choose a narrow or wide belt, a simple belt or one with embellishments, defining your waistline with a belt is one of the easiest ways to make an outfit look more polished.</i>
                <p>Winter accessories: Scarves, hats, and gloves keep you warm, but they’re also an opportunity to add color and patterns to your look, especially if your outerwear is more neutral.</p>
                
                <img src="https://puzzleit.ru/files/puzzles/222/221807/_original.jpg" alt="/"/>
                
                <h3>How to Accessorize: 4 Tips for Choosing Accessories</h3>
                <p>Accessorizing is all about balance, and the right accessories can make even the most basic outfit look glam.</p>

                

                <p>Choose a signature accessory. If you feel overwhelmed by accessory options, choose just one statement piece that makes you feel great and that you can wear with multiple outfits. When you’re ready to add more accessories, create balance by choosing one piece to dominate your look in terms of size or color, then layer on more subtle accessories.</p>
                <p>Think about colors and patterns. Accessories are a great way to add a pop of color to a simple outfit. Bright colors and animal prints can be difficult to work into your wardrobe, but vibrant, fun accessories like shoes, a belt, or a scarf can elevate your look.</p>
                <p>Use accessories to transform an outfit. Accessories are an easy way to take an outfit from the office to dinner with friends. A classic little black dress looks work-appropriate when paired with a blazer and flats. Ditch the blazer, swap the flats for stilettos, and add a pair of statement earrings or a cocktail ring, and you're ready for a night out. Have a few go-to accessories in mind for those moments when you’re not able to do a full outfit change.</p>
                <p>Your accessories don’t need to match. Matching accessories can read more conservative than fashion-forward. If you’re not sure which colors go together, start by adding one colorful accessory to a base of neutrals. Then, use to use the color wheel to get new ideas for bold color combinations.</p>

                <br/><br/>

                <h2><span style={{color: 'aqua'}}>|</span>Want to Learn More About Unleashing Your Inner Fashionista?</h2>
                <p>Get a MasterClass Annual Membership and let Tan France be your very own style spirit guide. Queer Eye’s fashion guru spills everything he knows about building a capsule collection, finding a signature look, understanding proportions, and more (including why it’s important to wear underwear to bed)—all in a soothing British accent, no less.</p>
                
                <div className="d-flex">
                    <img src="https://puzzleit.ru/files/puzzles/222/221807/_original.jpg" alt="/"/>
                    <div>
                    <p>Get a MasterClass Annual Membership and let Tan France be your very own style spirit guide. Queer capsule collection, finding a signature look, understanding proportions, and more <b>(including why it’s important to wear underwear to bed)</b>—all in a soothing British accent, no less.</p>
                    <p>Get a <i> MasterClass Annual Membership</i> and let Tan France be your very own style spirit guide. <b><i>Queer Eye’s fashion guru</i></b> spills everything he knows about building a capsule collection, finding a signature look, understanding proportions, and more <b>(It’s important to wear underwear to bed)</b>—all in a soothing British accent, no less.</p>
                    </div>
                    <img src="https://puzzleit.ru/files/puzzles/222/221807/_original.jpg" alt="/"/>
                </div>
            </div>
            
        </main>
    </>
  );
}

export default Product;