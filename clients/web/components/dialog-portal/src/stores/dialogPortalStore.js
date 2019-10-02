import { action, computed, observable } from 'mobx'
import uuid from 'uuid/v1'
import omitBy from 'lodash/omitBy'

class DialogPortalStore {
  @observable
  dialogs = {}

  @action
  openDialog = (dialog) => {
    const dialogId = uuid()
    this.dialogs = {
      ...this.dialogs,
      [dialogId]: {
        ...this.dialogs[dialogId],
        ...dialog,
        open: true
      }
    }
    return dialogId
  }

  @action
  closeDialog = (dialogId) => {
    this.dialogs = {
      ...this.dialogs,
      [dialogId]: {
        ...this.dialogs[dialogId],
        open: false
      }
    }
    setTimeout(() => {
      this.dialogs = omitBy(this.dialogs, (_, key) => key === dialogId)
    }, 1000)
  }

  @computed
  get getDialogs() {
    return this.dialogs
  }
}

const store = new DialogPortalStore()
export default store
