import Heading from "../ui/Heading";
import Post from "./Post";
import style from "./Blog.module.css";

import image1 from "../assets/blog-1.png";
import image2 from "../assets/blog-2.png";
import image3 from "../assets/blog-3.png";
const blogs = [
  {
    title: "23 Nov, 2023 / Cheesecake",
    content: "A Peek Behind the Cheesecake Curtain",
    desc: "Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very...",
    image: image1,
  },
  {
    title: "18 July, 2023 / Cheesecake",
    content: "Low-Sugar & Gluten-Free Cheesecakes",
    desc: "Welcome to our guilt-free indulgence zone, where we're redefining the art of cheesecake with our delectable low-sugar...",
    image: image2,
  },
  {
    title: "1 January, 2024 / Cheesecake",
    content: "Sweet Words - Customer Reviews of Cheesecakes",
    desc: 'Indulge in the rich tapestry of heartfelt stories within "Sweet Words." This curated collection of customer reviews offers a glimpse into the joy...',
    image: image3,
  },
];

export default function Blog() {
  return (
    <>
      <div className="">
        <Heading>Our Blog</Heading>
        <p style={{ color: "#734B33", textAlign: "center", fontSize: "16px" }}>
          Our Recent Posts
        </p>
      </div>

      <section className={style.blogpost}>
        {blogs.map((blog) => (
          <Post key={blog.title} blog={blog} />
        ))}
      </section>
    </>
  );
}
