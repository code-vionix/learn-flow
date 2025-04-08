import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function CustomQuestion({customQuestion,setCustomQuestion}) {

  const handleSubmitQuestion = () => {
    console.log(customQuestion)
    setCustomQuestion({ subject: "", message: "" })
  }

  return (
    <div className="lg:col-span-3  w-[21rem] ">
              <div className=" rounded-lg shadow p-5 bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Don&apos;t find your answer?
                </h2>
                <p className="text-gray-600 mb-6">
                  Don&apos;t worry, write your question here and our support
                  team will help you.
                </p>
                <div className="space-y-4 ">
                  <Input
                    placeholder="Subject"
                    className="bg-white h-11"
                    value={customQuestion.subject}
                    onChange={(e) =>
                      setCustomQuestion({
                        ...customQuestion,
                        subject: e.target.value,
                      })
                    }
                  />
                  <Textarea
                    placeholder="Message"
                    value={customQuestion.message}
                    onChange={(e) =>
                      setCustomQuestion({
                        ...customQuestion,
                        message: e.target.value,
                      })
                    }
                    className="min-h-[120px] bg-white"
                  />
                  <Button
                    onClick={handleSubmitQuestion}
                    className="w-[145px] font-semibold text-base py-4 h-10 bg-primary-500 hover:bg-primary-600 text-white"
                  >
                    Submit Question
                  </Button>
                </div>
              </div>
            </div>
  )
}

export default CustomQuestion