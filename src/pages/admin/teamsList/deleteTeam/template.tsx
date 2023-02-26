import React, {useEffect, useState} from 'react';
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import {removeTeam} from "shared/api/teamService";


export function DeleteTeam() {
  const client = useQueryClient()
  const [projectId, setProjectId] = useState("");
  const [buttonState, setButtonState] = useState({class: 'deleteButton', prompt: null})

  const {data, error, mutate: remove} = useMutation({
    mutationFn: removeTeam,
    onMutate: () => {
      setButtonState({class: 'deleteButton-mutating', prompt: null})
    },
    onSuccess: () => {
      client.invalidateQueries({queryKey: ["teams"]})
      setButtonState({class: 'deleteButton', prompt: null })

      // alert('Удален успешно. Бэк не отдает ничего кроме 200 ОК, так что можно очень успешно удалить несуществующего юзера. Добавил в TODO')
    },
    onError: () => {
      console.log(error)
    }

  })


  async function handleSubmit(e) {
    e.preventDefault()
    console.log(projectId)
    if (projectId) {
      remove(projectId)
      console.log(data + 'data')
    }
  }

  return (
    <>

        <div className="bg-primary dark:bg-lightGray-dark shadow sm:rounded-lg mb-4">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-primaryText-dark">Удалить команду по ID</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-grayText-dark">
              <p>Это действие нельзя отменить. Совсем-совсем нельзя.</p>
            </div>
            <form className="mt-5 flex gap-4" onSubmit={(e) => handleSubmit(e)}>
              <div className={""}>

                <input className={"primaryInput placeholder:text-sm"}
                       placeholder={"введите ID"}
                       onChange={e => setProjectId(e.target.value)}/>
              </div>
              <button
                disabled={!projectId}
                type="submit"
                className={buttonState.class}
              >
                <p>Удалить команду {projectId && `с ID ${projectId}`}</p>
              </button>
            </form>
          </div>
        </div>

    </>
    )
}
