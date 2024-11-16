import { AnimatedTestimonials } from "./ui/testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Allow users to create accounts using email or social media. Basic details such as name, age, location, skills and interests will be required.",
      name: "Feature 1",
      designation: "User Registration",
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Users can browse skills categorized by areas such as arts, crafts, technology, languages, cooking, and more.",
      name: "Feature 2",
      designation: "Skill Categories",
      src: "https://plus.unsplash.com/premium_photo-1683120972279-87efe2ba252f?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "An internal messaging system will allow users to communicate, discuss learning goals, and schedule sessions.",
      name: "Feature 3",
      designation: "Community Communication",
      src: "https://plus.unsplash.com/premium_photo-1673340683562-cb8e2ed0b195?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Promote and organize community events or workshops where people can gather to teach and learn in person.",
      name: "Feature 4",
      designation: "Events and Workshops",
      src: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
