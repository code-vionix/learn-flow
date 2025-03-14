export const getToolsFormCoures = (array, catName) => {
  const findTools = [
    ...new Set(
      array?.flatMap((cours) => {
        return cours[catName];
      })
    ),
  ];
  return findTools;
};

export const getCategoryFromCourses = (courses) => {
  const categories = [];
  courses.forEach((course) => {
    let category = categories.find((c) => c.title === course.category);

    if (!category) {
      category = {
        id: `${categories.length + 1}`,
        title: course.category,
        logo: course.category[0], // First letter as logo
        subCategory: [],
      };
      categories.push(category);
    }

    let subCategory = category.subCategory.find(
      (sub) => sub.name === course.subCategory
    );

    if (!subCategory) {
      subCategory = {
        id: `${category.subCategory.length + 1}`,
        name: course.subCategory,
        count: 1,
      };
      category.subCategory.push(subCategory);
    } else {
      subCategory.count += 1;
    }
  });

  return categories;
};

//   const categories = transformCoursesToCategories(courses);
//   console.log(categories);
