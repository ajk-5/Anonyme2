import Card from "./Card";

export default function CourseCard({ cours, onClick }) {
  return <Card item={cours} onClick={onClick} />;
}