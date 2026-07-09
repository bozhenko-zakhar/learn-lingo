import { Filter } from "@/types/filter";
import { Teacher } from "@/types/teacher";

export function filterTeachers(
  teachers: Teacher[],
  filters: Filter
) {
  return teachers.filter((teacher) => {
    if (
      filters.language &&
      !teacher.languages.includes(filters.language)
    ) {
      return false;
    }

    if (
      filters.level &&
      !teacher.levels.includes(filters.level)
    ) {
      return false;
    }

    if (
      filters.price &&
      teacher.price_per_hour < Number(filters.price)
    ) {
      return false;
    }

    return true;
  });
}