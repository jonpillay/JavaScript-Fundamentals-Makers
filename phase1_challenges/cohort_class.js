const cohort = {
    name: 'March \'23',
    id: 1277,
    students: ['Saka', 'Martinelli', 'Trossard']
  };

  const print_cohort = (group) => {
    console.log(group.id + " - " + group.name + " - " + group.students.length )
  }

  print_cohort(cohort)