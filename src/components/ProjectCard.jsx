import Card from "./Card";

export default function ProjectCard({ proj, onClick }) {
  return <Card item={proj} onClick={onClick} />;
}