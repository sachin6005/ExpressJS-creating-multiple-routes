const fs = require('fs')

const student = JSON.parse(fs.readFileSync('/home/sachin/Documents/CGCS phase2/NodeJS/ExpressJS/ExpressJS-creating-multiple-routes/data.json'))

exports.checkID = (req,res,next,val) => {
    
    if(req.params.id > student.length){
        return res.status(404).json({
            status : 'failed',
            message: 'invalid ID'
        })
    }
    next()
}

exports.checkBody = (req,res,next) => {
    if(!req.body.Name || !req.body.Job){
    return res.status(400).json({
        status : 'fail',
        message : 'Missing Name or Job'
    })
    }
    next()
}

exports.getStudent = (req, res) => {
    console.log(req.requireTime)
    res.status(200).json({
        status : 'success',
        result: student.length,
        requestAt: req.requireTime,
        data: {
                 student
              }
    })
}

exports.createStudent = (req,res) => {
    const newId = student[student.length -1].id + 1
    const newstudent = Object.assign({id: newId},req.body)
    student.push(newstudent)
    fs.writeFile('/home/sachin/Documents/CGCS phase2/NodeJS/ExpressJS/ExpressJS-Routing/data.json', JSON.stringify(student), err => {
        res.status(200).json({
            status : 'success',
            data: {
                student: newstudent
            }
        })
    })
    res.send('Done')
}

exports.getPerson = (req, res) => {
    console.log(req.params)

    const id = req.params.id * 1
    if(id > student.length){
        return res.status(404).json({
            status : 'failed',
            message: 'invalid ID'
        })
    }

    const person = student.find(i => i.id === id)

    res.status(200).json({
        status : 'success',
        
         data: {
                 person
               }
    })
}


exports.updatePerson =(req, res) => {
    
    if(req.params.id > student.length){
        return res.status(404).json({
            status : 'failed',
            message: 'invalid ID'
        })
    }
    res.status(200).json({
        status : 'success',
        
         data: {
                 student: person
               }
    })
}


exports.deletePerson = (req, res) => {
    
    if(req.params.id > student.length){
        return res.status(404).json({
            status : 'failed',
            message: 'invalid ID'
        })
    }
    
    res.status(204).json({
        status : 'success',
        data: null
    })
}
