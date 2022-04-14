function getGrade (s1, s2, s3) {

let results = (s1 +s2 + s3) / 3
    if (results >= 90)
        return ('A')
    else if (results >= 80){
        return ('B')
    }
      else if (results >= 70){
        return ('C')
    }
      else if (results  >=60){
        return ('D')
    }
    else{
       return ('F')
    }
}
