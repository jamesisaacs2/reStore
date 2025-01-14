import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../app/store/configureStore";
import { signinUser } from "./accountSlice";

export default function Login() {
	const history = useHistory();
	const location = useLocation<any>();
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors, isValid },
	} = useForm({
		mode: "all",
	});

	async function submitForm(data: FieldValues) {
		try {
			await dispatch(signinUser(data));
			history.push(location.state?.from?.pathname || "/catalog");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Container
			component={Paper}
			maxWidth="sm"
			sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 4 }}
		>
			<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign in
			</Typography>
			<Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
				<TextField
					margin="normal"
					fullWidth
					label="Username"
					autoFocus
					{...register("username", {
						required: "Username is required",
					})}
					error={!!errors.username}
					helperText={errors?.username?.message}
				/>
				<TextField
					margin="normal"
					fullWidth
					label="Password"
					type="password"
					{...register("password", {
						required: "Password is required",
					})}
					error={!!errors.password}
					helperText={errors?.password?.message}
				/>
				<LoadingButton
					loading={isSubmitting}
					disabled={!isValid}
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Sign In
				</LoadingButton>
				<Grid container>
					<Grid item>
						<Link to="/register">{"Don't have an account? Sign Up"}</Link>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}

/*

-----Top, after imports: -----

function Copyright(props: any) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

-----Top after container: -----

         <Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
         
-----Before signin: -----

            <FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>

-----After Grid container: -----

					<Grid item xs>
						<Link href="#" variant="body2">
							Forgot password?
						</Link>
					</Grid>

-----Bottom of container: -----

   <Copyright sx={{ mt: 8, mb: 4 }} />

*/
