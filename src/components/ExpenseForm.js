import React from 'react'

// React-dates datepicker package
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// Import Momentjs
import moment from 'moment'

// Create timenow for dates
const timenow = moment();
console.log(timenow.format('Do MMM YY')); // Checks it works

// Import firebase react file uploader for receipts
import FileUploader from 'react-firebase-file-uploader'
import { connect } from 'react-redux'
import { firebase } from '../firebase/firebase'

// Expense form
export class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: props.expense ? props.expense.title : '',
            details: props.expense ? props.expense.details : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            category: props.expense ? props.expense.category : 'travel',
            km: props.expense ? (props.expense.km / 100).toString() : '',
            receiptURL: props.expense ? props.expense.receiptURL : '',
            isUploading: false,
            progress: 0,
            avatarURL: '',
            avatar: '',
            calFocused: false
        };
    }

    // Handle user onChanged events

    // Calendar - datepicker - uses react-dates from airbnb github
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calFocused: focused}))
    };

    // Title
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }))
    };

    // Details
    onDetailsChange = (e) => {
        const details = e.target.value;
        this.setState(() => ({ details }));
    };

    // Category
    onCategoryChange = (e) => {
        const { selectedIndex } = e.target;
        const text = e.target.options[selectedIndex].innerHTML;
        this.setState({ category: text })
        // const category = e.target.value;
        // this.setState(() => ({ category }));
    };

    // Amount €
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    // Amount €
    onKmChange = (e) => {
        const km = e.target.value;

            this.setState(() => ({ km }));
    };

    // Date range
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
   };

   // file uploader handling
   // from NPM react-firebase-file-uploader docs
   onUploadStart = (e) => {
    this.setState({
        isUploading: true,
        progress: 0
    });
   };

   handleProgress = (progress) => this.setState({ progress });
   handleUploadError = (error) => {
       this.setState({ isUploading: false });
       console.error(error);
   }
   // Uploading to firebase storage
   handleUploadSuccess = (filename) => {
    this.setState({avatar: filename, progress: 100, isUploading: false});
    firebase.storage().ref(`images/${this.state.uid}`).child(filename).getDownloadURL().then(url => this.setState({receiptURL: url}));
  };

  // display recipt
  showReceipt = () => {
      return (<a href={this.state.receiptURL}></a>);
  }

  // delete receipt
  deleteReceipt = () => {
      const receiptURL = this.state.receiptURL;
      const firebaseStorage = firebase.storage();

      firebaseStorage.ref().child(`${receiptURL}`).delete().then(() => {
          console.log(`${receiptURL} deleted!`)
      }).catch((e) => {
          console.log('Error showing is: ', e)
      })
  }

   // handle the form submission
   onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.amount) {
        this.setState(() => ({ error: 'Please enter expense title and amount.'}))
    } else {
        this.setState(() => ({ error: 'Expense has not been saved!' }));
        this.props.onSubmit({
            title: this.state.title,
            amount: parseFloat(this.state.amount, 10) * 100, // gets rid of decimals
            createdAt: this.state.createdAt.valueOf(),
            details: this.state.details,
            category: this.state.category,
            km: parseFloat(this.state.km, 10) * 100, // gets rid of decimals
            receiptURL: this.state.receiptURL
        });
    }
   };
   render() {
        return ( 
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input className="text-input" type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChange} autoFocus/>
                    <input className="text-input" type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <input className="text-input" type="text" placeholder="Kms" value={this.state.km} onChange={this.onKmChange} />
                    <SingleDatePicker
                        showClearDate={true}   
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <label className="text-input">
                        Type of expense:
                        <select className="drop-down" onChange={this.onCategoryChange}>
                            <option value="travel">Travel</option>
                            <option value="meeting">Meeting</option>
                            <option value="food-and-drink">Food and Drink</option>
                        </select>
                    </label>
                    <div>
                    {/*Handle receipt upload*/}
                        <label className="receipt-btn btn">
                            {this.state.isUploading ? 'Receipt is uploading. Please wait' : 'Upload Receipt'}
                            {this.state.isUploading && <p>Progress: {this.state.progress} percent</p>}
                            <FileUploader
                                accept="image/*" 
                                name="avatar" 
                                randomizeFilename={false}
                                onUploadStart={this.onUploadStart}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                                onProgress={this.handleProgress}
                                storageRef={firebase.storage().ref(`images/${this.state.uid}`)}
                            />
                        </label>
                        <div>
                            {this.state.receiptURL ? <a href={this.state.receiptURL}><img alt="Receipt" onClick={this.showReceipt} src={this.state.receiptURL} className="receipt"/></a> : <p>No Receipts added yet.</p>}
                        </div>
                    </div>
                    <textarea className="text-area" placeholder="You can add extra details about your expense in here." value={this.state.details} onChange={this.onDetailsChange}></textarea>
                    <div className="">
                        <button className="btn">
                            {/*Passed down the path prop in AddExp.js compnent
                            So I have access to the path location for create/update view*/}
                            {this.props.path ? "Create new expense" : "Update expense"}
                        </button>
                    </div>
                </form>
        )
    }
}

const mapStateToProps = (state) => ({
    uid: state.authentication.uid
})

export default connect(mapStateToProps)(ExpenseForm);